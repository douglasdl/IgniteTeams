import { UsersThree } from "phosphor-react-native";
import colors from "tailwindcss/colors";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface GroupCardProps extends TouchableOpacityProps {
  title: string
}

export function GroupCard({ title, ...rest }: GroupCardProps) {
  return (
    <TouchableOpacity
      className="w-full h-24 bg-zinc-700 rounded-lg flex-row items-center p-6 gap-4 mb-3"
      {...rest}
    >
      <UsersThree size={32} color={colors.green[700]} weight="fill" />
      <Text className="text-xl text-gray-200">{title}</Text>
    </TouchableOpacity>
  )
}