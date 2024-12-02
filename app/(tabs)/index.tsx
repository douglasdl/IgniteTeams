import { Button } from '@/components/Button';
import { GroupCard } from '@/components/GroupCard';
import { Header } from '@/components/Header';
import { Highlight } from '@/components/Highlight';
import { ListEmpty } from '@/components/ListEmpty';
import { useCallback, useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { groupsGetAll } from '@/storage/group/groupsGetAll';
import { Loading } from '@/components/Loading';

export default function HomeScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<string[]>([]);
  
  const router = useRouter();
 
  function handleNewGroup() {
    router.navigate('/newgroup');
	}
  
  function handleOpenGroup(group: string) {
    router.navigate({
      pathname: '/players',
      params: { group }
    });
  }

  async function fetchGroups() {
    try {
			const data = await groupsGetAll();
			setGroups(data);
		} catch (error) {
			console.error(error);
			Alert.alert('Turmas', 'Não foi possível carregar as Turmas!');
		}
  }

  useFocusEffect(useCallback(() => {
		setIsLoading(true);
		fetchGroups();
		setIsLoading(false);
	}, [groups]))

  return (
    <SafeAreaView className="flex-1 bg-zinc-800 p-6 mb-12">
      <Header />
      <Highlight 
				title='Turmas'
				subtitle='Jogue com a sua turma'
			/>
      { 
        isLoading ? <Loading /> : (
          <FlatList
            data={groups}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <GroupCard 
                title={item}
                onPress={() => {handleOpenGroup(item)}}
              />
            )}
            contentContainerStyle={groups.length === 0 && { flex: 1 }}
            ListEmptyComponent={() => (
              <ListEmpty message='Nenhuma turma cadastrada!' />
            )}
          />
        )
      }
      <Button 
				title="Criar Nova Turma" 
				onPress={handleNewGroup}
			/>
    </SafeAreaView>
  );
}