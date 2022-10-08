import { useState } from 'react';
import { FlatList } from 'react-native';
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
import { useRoute } from '@react-navigation/native';

type RouteParams = {
    group: string;
}

export function Players() {

    const [teams, setTeams] = useState(['Time A', 'Time B']);
    const [selectedTeam, setSelectedTeam] = useState(teams[0]);
    const [players, setPlayers] = useState(['Douglas', 'Karina', 'Carol', 'Yuna']);

    const route = useRoute();
    const { group } = route.params as RouteParams;
 
    return (
        <Container>
            <Header showBackButton />

            <Highlight 
                title={group}
                subtitle='Adicione a galera e separe os times'
            />

            <Form>
                <Input 
                    placeholder='Nome do participante' 
                    autoCorrect={false}
                />

                <ButtonIcon 
                    icon='add'
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
                    showHorizontalScrollIndicator={false}
                />

                <NumberOfPlayers>
                    { players.length }
                </NumberOfPlayers>
            </HeaderList>

            <FlatList 
                data={players}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <PlayerCard
                        name={item}
                        onRemove={() => {}}
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


            <Button 
                title="Remover Turma" 
                style={{ marginTop: 20 }}
                type='SECONDARY'
            />
            
        </Container>
    );
}