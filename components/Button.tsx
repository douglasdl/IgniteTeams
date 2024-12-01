
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type ButtonProps = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
}

export function Button({ title, type = 'PRIMARY', ...rest }: ButtonProps) {
  const colors = type === "PRIMARY" ? "bg-green-700" : "bg-red-700";

  return (
    <TouchableOpacity
      className={`flex-1 min-h-[56px] max-h-[56px] rounded-lg items-center justify-center ${colors}`}
      {...rest}
    >
      <Text className='text-lg text-white font-bold'>{title}</Text>
    </TouchableOpacity>
  )
}