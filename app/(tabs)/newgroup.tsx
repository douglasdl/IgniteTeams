import { Button } from '@/components/Button';
import { Header } from '@/components/Header';
import { Highlight } from '@/components/Highlight';
import { View } from 'react-native';

export default function TabTwoScreen() {

  async function handleCreate() {

  }
  
  return (
    <View className="flex-1 bg-zinc-800 p-6">
      <Header showBackButton />
      <Highlight
        title='Nova Turma'
        subtitle='Crie uma turma para adicionar pessoas'
      />
      <Button
					title="Criar" 
					style={{ marginTop: 20 }}
					onPress={() => handleCreate()}
				/>
    </View>
  );
}