import { Image, Text, TouchableOpacity, View } from "react-native";
import logoImg from '../assets/images/react-logo.png';
import { CaretLeft } from 'phosphor-react-native';
import colors from "tailwindcss/colors";

interface HeaderProps {
  showBackButton?: boolean
}

export function Header({ showBackButton = false }: HeaderProps) {
  
  function handleGoBack() {
    
  }
  
  return (
    <View className="w-full flex-row items-center justify-center">
      {
        showBackButton &&
        <TouchableOpacity onPress={handleGoBack} className="flex-1">
          <CaretLeft color={colors.gray[200]} size={32} />
        </TouchableOpacity>
      }
            
      <Image source={logoImg} className="w-14 aspect-square" />
    </View>
  )
}