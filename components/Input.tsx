
import { TextInput, TextInputProps } from 'react-native';
import colors from "tailwindcss/colors";

interface InputProps extends TextInputProps {
  inputRef?: React.RefObject<TextInput>
}

export function Input({ inputRef, ...rest }: InputProps) {
  
  return (
    <TextInput 
      ref={inputRef}
      placeholderTextColor={colors.gray[300]}
      className='bg-zinc-700 text-white text-xl p-4 w-full rounded-lg min-h-[56px] max-h-[56px] flex-1'
      { ...rest }
    />
  )
}