import { Button } from '@/components/Button';
import { ButtonIcon } from '@/components/ButtonIcon';
import { Filter } from '@/components/Filter';
import { Header } from '@/components/Header';
import { Highlight } from '@/components/Highlight';
import { Input } from '@/components/Input';
import { ListEmpty } from '@/components/ListEmpty';
import { Loading } from '@/components/Loading';
import { PlayerCard } from '@/components/PlayerCard';
import { groupRemoveByName } from '@/storage/group/groupRemoveByName';
import { playerRemoveByGroup } from '@/storage/player/playerRemoveByGroup';
import { playersAddByGroup } from '@/storage/player/playersAddByGroup';
import { playersGetByGroup } from '@/storage/player/playersGetByGroup';
import { playersGetByGroupAndTeam } from '@/storage/player/playersGetByGroupAndTeam';
import { PlayerStorageDTO } from '@/storage/player/PlayerStorageDTO';
import { AppError } from '@/utils/AppError';
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Alert, FlatList, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabThreeScreen() {
  const [isLoading, setIsLoading] = useState(!true);
  const [teams, setTeams] = useState(['Time A', 'Time B']);
  const [selectedTeam, setSelectedTeam] = useState(teams[0]);
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
  const [newPlayerName, setNewPlayerName] = useState('');
  
  const { group } = useLocalSearchParams();
  
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
        router.navigate('/');
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
    <SafeAreaView className="flex-1 bg-zinc-800 p-6 mb-12">
      <Header showBackButton />
      <Highlight
        title={group}
        subtitle='Adicione a galera e separe os times'
      />

      <View className='w-full bg-zinc-900 flex-row justify-center rounded-lg'>
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
          icon="add"
          onPress={handleAddPlayer}
        />
      </View>

      <View className='w-full flex-row items-center mt-8 mb-3'>
                
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

        <Text className='text-gray-200 font-bold text-base'>
          { players.length }
        </Text>
      </View>

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
    </SafeAreaView>
  );
}