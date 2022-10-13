import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { PLAYER_COLLECTION } from '@storage/storageConfig';
import { groupsGetAll } from "./groupsGetAll";

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