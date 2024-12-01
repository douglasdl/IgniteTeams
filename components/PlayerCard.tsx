import { Text, View } from 'react-native';
import { ButtonIcon } from './ButtonIcon';
import { MaterialIcons } from '@expo/vector-icons';
import colors from 'tailwindcss/colors';

interface PlayerCardProps {
  name: string
  onRemove: () => void
}

export function PlayerCard({ name, onRemove }: PlayerCardProps) {
  return (
    <View className='w-full h-[56px] bg-zinc-700 rounded-md flex-row items-center mb-4'>
      <MaterialIcons
        name='person'
        size={24}
        color={colors.gray[200]}
        className='ml-4 mr-1'
      />

      <Text className='flex-1 text-xl text-gray-200 font-normal'>
        {name}
      </Text>

      <ButtonIcon
        icon='close'
        type='SECONDARY'
        onPress={onRemove}
      />
    </View>
  )
}