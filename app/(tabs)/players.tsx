import { Header } from '@/components/Header';
import { Highlight } from '@/components/Highlight';
import { Text, View } from 'react-native';

export default function TabThreeScreen() {
  const group = "Nome da Turma"
  return (
    <View className="flex-1 bg-zinc-800 p-6">
      <Header />
      <Highlight
        title={group}
        subtitle='Adicione a galera e separe os times'
      />
    </View>
  );
}