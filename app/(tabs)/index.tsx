import { GroupCard } from '@/components/GroupCard';
import { Header } from '@/components/Header';
import { Highlight } from '@/components/Highlight';
import { ListEmpty } from '@/components/ListEmpty';
import { useState } from 'react';
import { FlatList, View } from 'react-native';

export default function HomeScreen() {

  const [groups, setGroups] = useState<string[]>([])

  function handleOpenGroup(group: string) {
		
	}

  return (
    <View className="flex-1 bg-zinc-800 p-6">
      <Header />
      <Highlight 
				title='Turmas'
				subtitle='Jogue com a sua turma'
			/>

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

    </View>
  );
}