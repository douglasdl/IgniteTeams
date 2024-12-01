import { Header } from '@/components/Header';
import { Highlight } from '@/components/Highlight';
import { View } from 'react-native';

export default function TabTwoScreen() {
  return (
    <View className="flex-1 bg-zinc-800 p-6">
      <Header showBackButton />
      <Highlight
					title='Nova Turma'
					subtitle='Crie uma turma para adicionar pessoas'
				/>
    </View>
  );
}