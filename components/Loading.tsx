import { ActivityIndicator, View } from "react-native";
import colors from "tailwindcss/colors";

export function Loading() {
  return(
    <View className='items-center justify-center flex-1 bg-gray-600'>
      <ActivityIndicator color={colors.gray[200]} />;
    </View>
  )
}