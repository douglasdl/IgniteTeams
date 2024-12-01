import { GroupCard } from '@/components/GroupCard';
import { Header } from '@/components/Header';
import { Highlight } from '@/components/Highlight';
import { View } from 'react-native';

export default function HomeScreen() {

  function handleOpenGroup(group: string) {
		
	}

  return (
    <View className="flex-1 bg-zinc-800 p-6">
      <Header />
      <Highlight 
				title='Turmas'
				subtitle='Jogue com a sua turma'
			/>

      <GroupCard 
			  title={"Name"}
			  onPress={() => {handleOpenGroup("")}}
			/>
    </View>
  );
}