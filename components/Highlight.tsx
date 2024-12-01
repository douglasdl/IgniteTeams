import { Text, View } from "react-native";

interface HighlightProps {
  title: string | string[]
  subtitle: string
}

export function Highlight({ title, subtitle }: HighlightProps) {
  return(
    <View className="w-full my-8">
      <Text className="text-center text-3xl font-bold text-white">{title}</Text>
      <Text className="text-center text-xl font-regular text-gray-300">{subtitle}</Text>
    </View>
  )
}