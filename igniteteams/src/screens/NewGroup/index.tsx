import { useState } from 'react';
import { 
	Container, 
	Content, 
	Icon, 
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { groupCreate } from '@storage/group/groupCreate';
import { Alert } from 'react-native';
import { AppError } from '@utils/AppError';

export function NewGroup() {

	const [group, setGroup] = useState('');

	const navigation = useNavigation();

	async function handleCreate() {
		try {
			await groupCreate(group);
			navigation.navigate('players', { group });
			
		} catch (error) {
			if(error instanceof AppError) {
				Alert.alert('Nova Turma', error.message);
			} else {
				Alert.alert('Nova Turma', 'Não foi possível criar uma nova turma!');
				console.log(error);
			}
		}
	}

  	return (
		<Container>
			<Header showBackButton />

			<Content>
				<Icon />

				<Highlight 
					title='Nova Turma'
					subtitle='Crie uma turma para adicionar pessoas'
				/>

				<Input 
					placeholder='Nome da turma' 
					onChangeText={setGroup}
				/>

				<Button 
					title="Criar" 
					style={{ marginTop: 20 }}
					onPress={() => handleCreate()}
				/>
			</Content>
			
		</Container>
  	);
}