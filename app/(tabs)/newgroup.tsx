import { Button } from '@/components/Button';
import { Header } from '@/components/Header';
import { Highlight } from '@/components/Highlight';
import { Input } from '@/components/Input';
import { UsersThree } from 'phosphor-react-native';
import { useState } from 'react';
import { View } from 'react-native';
import colors from 'tailwindcss/colors';

export default function TabTwoScreen() {

  const [group, setGroup] = useState('');

  async function handleCreate() {

  }
  
  return (
    <View className="flex-1 bg-zinc-800 p-6">
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
    </View>
  );
}