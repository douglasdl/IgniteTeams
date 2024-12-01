import { Header } from '@/components/Header';
import { Highlight } from '@/components/Highlight';
import { View } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-zinc-800 p-6">
      <Header />
      <Highlight 
				title='Turmas'
				subtitle='Jogue com a sua turma'
			/>
    </View>
  );
}