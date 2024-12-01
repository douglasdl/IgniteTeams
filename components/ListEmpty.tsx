import { Text, View } from "react-native";

interface ListEmptyProps {
  message: string
}

export function ListEmpty({ message }: ListEmptyProps) {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-gray-300 text-lg">{message}</Text>
    </View>
  )
}