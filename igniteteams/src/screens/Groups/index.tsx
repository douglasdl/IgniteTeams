import { useState, useCallback } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { 
	Container, 
} from './styles';
import { Alert, FlatList } from 'react-native';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { groupsGetAll } from '@storage/group/groupsGetAll';
import { Loading } from '@components/Loading';

export function Groups() {

	const [isLoading, setIsLoading] = useState(true);
	const [groups, setGroups] = useState<string[]>([]);

	const navigation = useNavigation();

	function handleNewGroup() {
		navigation.navigate('new');
	}

	function handleOpenGroup(group: string) {
		navigation.navigate('players', { group });
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
		<Container>
			<Header />
			<Highlight 
				title='Turmas'
				subtitle='Jogue com a sua turma'
			/>

			{
				isLoading ? <Loading /> :
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
			}

			<Button 
				title="Criar Nova Turma" 
				onPress={handleNewGroup}
			/>
			
		</Container>
  	);
}