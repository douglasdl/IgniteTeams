import { ActivityIndicator, View } from "react-native";
import colors from "tailwindcss/colors";

export function Loading() {
  return(
    <View className='items-center justify-center flex-1 bg-zinc-800'>
      <ActivityIndicator color={colors.gray[200]} />;
    </View>
  )
}