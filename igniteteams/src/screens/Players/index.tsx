import { useEffect, useRef, useState } from 'react';
import { Alert, FlatList, TextInput } from 'react-native';
import { 
	Container, 
	Form,
    HeaderList,
    NumberOfPlayers, 
} from './styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { ButtonIcon } from '@components/ButtonIcon';
import { Filter } from '@components/Filter';
import { PlayerCard } from '@components/PlayerCard';
import { ListEmpty } from '@components/ListEmpty';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AppError } from '@utils/AppError';
import { playersAddByGroup } from '@storage/player/playersAddByGroup';
import { playersGetByGroup } from '@storage/player/playersGetByGroup';
import { playersGetByGroupAndTeam } from '@storage/player/playersGetByGroupAndTeam';
import { PlayerStorageDTO } from '@storage/player/PlayerStorageDTO';
import { playerRemoveByGroup } from '@storage/player/playerRemoveByGroup';
import { groupRemoveByName } from '@storage/group/groupRemoveByName';
import { Loading } from '@components/Loading';

type RouteParams = {
    group: string;
}

export function Players() {

    const [isLoading, setIsLoading] = useState(true);
    const [teams, setTeams] = useState(['Time A', 'Time B']);
    const [selectedTeam, setSelectedTeam] = useState(teams[0]);
    const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
    const [newPlayerName, setNewPlayerName] = useState('');

    const navigation = useNavigation();
    const route = useRoute();
    const { group } = route.params as RouteParams;

    const newPlayerNameInputRef = useRef<TextInput>(null);
 
    async function handleAddPlayer() {
        if(newPlayerName.trim().length === 0) {
            return Alert.alert('Nova Pessoa', 'Informe o nome da pessoa!')
        }

        const newPlayer = {
            name: newPlayerName,
            team: selectedTeam,
        }

        try {
            await playersAddByGroup(newPlayer, group);

            newPlayerNameInputRef.current?.blur();

            setNewPlayerName('');
            const players = await playersGetByGroup(group);
        } catch (error) {
            if(error instanceof AppError) {
                Alert.alert('Novo participante', error.message);
            } else {
                Alert.alert('Novo participante', 'Não foi possível adicionar!');
            }
        }
    }

    async function fetchPlayersByTeam() {
        try {
            const playersByTeam = await playersGetByGroupAndTeam(group, selectedTeam);
            setPlayers(playersByTeam);
        } catch (error) {
            console.log(error);
            Alert.alert('Participantes', `Não foi possível carregar as pessoas do time ${selectedTeam}!`);
        }
    }

    async function handleRemovePlayer(playerName: string) {
         try {
            await playerRemoveByGroup(playerName, group);
         } catch (error) {
            console.log(error);
            Alert.alert('Remover Participante', 'Não foi possível remover essa pessoa!')
         }
    }

    async function groupRemove() {
        try {
            groupRemoveByName(group);
            navigation.navigate('groups'); 
        } catch (error) {
            console.log(error);
            Alert.alert('Remover Turma', 'Não foi possível remover essa turma!')
        }
    }

    async function handleRemoveGroup() {
        Alert.alert(
            'Remover Turma', 
            'Deseja remover a Turma?',
            [
                { text: 'Não', style: 'cancel' },
                { text: 'Sim', onPress: () => groupRemove() }
            ]
        )
        
    }

    useEffect(() => {
        setIsLoading(true);

        fetchPlayersByTeam();

        setIsLoading(false);
    }, [selectedTeam, players])

    return (
        <Container>
            <Header showBackButton />

            <Highlight 
                title={group}
                subtitle='Adicione a galera e separe os times'
            />

            <Form>
                <Input 
                    inputRef={newPlayerNameInputRef}
                    placeholder='Nome do participante' 
                    autoCorrect={false}
                    onChangeText={setNewPlayerName}
                    value={newPlayerName}
                    onSubmitEditing={handleAddPlayer}
                    returnKeyType='done'
                />

                <ButtonIcon 
                    icon='add'
                    onPress={handleAddPlayer}
                />
            </Form>

            <HeaderList>
                
                <FlatList 
                    data={teams}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Filter 
                            title={item} 
                            isActive={item === selectedTeam}
                            onPress={() => setSelectedTeam(item)}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />

                <NumberOfPlayers>
                    { players.length }
                </NumberOfPlayers>
            </HeaderList>

            {
                isLoading ? <Loading /> :
                <FlatList 
                    data={players}
                    keyExtractor={item => item.name}
                    renderItem={({ item }) => (
                        <PlayerCard
                            name={item.name}
                            onRemove={() => handleRemovePlayer(item.name)}
                        />
                    )}
                    ListEmptyComponent={() => (
                        <ListEmpty 
                            message='Não há pessoas nesse time'
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={[
                        { paddingBottom: 100 },
                        players.length === 0 && { flex: 1 },
                    ]}
                />
            }

            <Button 
                title="Remover Turma" 
                style={{ marginTop: 20 }}
                type='SECONDARY'
                onPress={() => handleRemoveGroup()}
            />
            
        </Container>
    );
}