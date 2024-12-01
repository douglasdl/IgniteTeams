import { Button } from '@/components/Button';
import { Header } from '@/components/Header';
import { Highlight } from '@/components/Highlight';
import { View } from 'react-native';

export default function TabThreeScreen() {
  const group = "Nome da Turma";

  async function handleRemoveGroup() {

  }

  return (
    <View className="flex-1 bg-zinc-800 p-6">
      <Header />
      <Highlight
        title={group}
        subtitle='Adicione a galera e separe os times'
      />

      <Button
        title="Remover Turma" 
        style={{ marginTop: 20 }}
        type='SECONDARY'
        onPress={() => handleRemoveGroup()}
      />
    </View>
  );
}