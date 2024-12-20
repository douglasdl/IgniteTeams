import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "../storageConfig";
import { AppError } from "@/utils/AppError";
import { groupsGetAll } from './groupsGetAll';

export async function groupCreate(newGroup: string) {
  try {
    const storedGroups = await groupsGetAll();

    // Check if the group name is not blank
    if(newGroup.trim().length === 0) {
      throw new AppError("Insira o nome do grupo!");
    }

    // Check if the group name already exists
    const groupAlreadyExists = storedGroups.includes(newGroup);
    if(groupAlreadyExists) {
      throw new AppError("Já existe um grupo cadastrado com esse nome!");
    }

    const storage = JSON.stringify([...storedGroups, newGroup]);
    await AsyncStorage.setItem(GROUP_COLLECTION, storage);

  } catch (error) {
    throw error;
  }
}