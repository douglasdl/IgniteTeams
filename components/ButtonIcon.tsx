
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import colors from 'tailwindcss/colors';

export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type ButtonIconProps = TouchableOpacityProps & {
  type?: ButtonIconTypeStyleProps
  icon: keyof typeof MaterialIcons.glyphMap
}

export function ButtonIcon({ icon, type = 'PRIMARY', ...rest }: ButtonIconProps) {
  const fillColor = type === "PRIMARY" ? colors.green[700] : colors.red[700];
  return (
    <TouchableOpacity
      className='w-16 h-16 items-center justify-center'
      {...rest}
    >
      <MaterialIcons 
        type={type}
        name={icon}
        color={fillColor}
        size={24}
      />
    </TouchableOpacity>
  )
}