import AsyncStorage from "@react-native-async-storage/async-storage";

import { groupsGetAll } from "./groupsGetAll";
import { GROUP_COLLECTION, PLAYER_COLLECTION } from "../storageConfig";

export async function groupRemoveByName(removedGroup: string) {
  try {
    const storedGroups = await groupsGetAll();
    const groups = storedGroups.filter(group => group !== removedGroup);

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups));
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${removedGroup}`);
  } catch (error) {
    throw error;
  }
}