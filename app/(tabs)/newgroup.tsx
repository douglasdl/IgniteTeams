import { Button } from '@/components/Button';
import { Header } from '@/components/Header';
import { Highlight } from '@/components/Highlight';
import { Input } from '@/components/Input';
import { groupCreate } from '@/storage/group/groupCreate';
import { AppError } from '@/utils/AppError';
import { useRouter } from 'expo-router';
import { UsersThree } from 'phosphor-react-native';
import { useState } from 'react';
import { Alert, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from 'tailwindcss/colors';

export default function TabTwoScreen() {
  const router = useRouter();

  const [group, setGroup] = useState('');

  async function handleCreate() {
    try {
      await groupCreate(group);

      router.navigate({
        pathname: '/players',
        params: { group }
      });
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
    <SafeAreaView className="flex-1 bg-zinc-800 p-6 mb-12">
      <Header showBackButton />
      <View className='items-center justify-center flex-1 w-full gap-4'>
        <UsersThree 
          size={56} 
          color={colors.green[700]}
        />

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
          onPress={() => handleCreate()}
          />
      </View>
    </SafeAreaView>
  );
}