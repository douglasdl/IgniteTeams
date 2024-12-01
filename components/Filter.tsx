
import { Text, TouchableOpacityProps } from 'react-native';
import { TouchableOpacity } from 'react-native';

export interface FilterStyleProps {
  isActive?: boolean
}

interface FilterProps extends TouchableOpacityProps, FilterStyleProps {
  title: string
}

export function Filter({ title, isActive = false, ...rest }: FilterProps) {
  const border = isActive && "border border-green-700";
  return (
    <TouchableOpacity 
      className={`rounded-md mr-3 py-1 px-2 w-18 items-center justify-center ${border}`}
      {...rest}
    >
      <Text className='text-base text-white font-bold uppercase'>{title}</Text>
    </TouchableOpacity>
  )
}