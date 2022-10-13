import AsyncStorage from '@react-native-async-storage/async-storage';
import { PLAYER_COLLECTION } from '@storage/storageConfig';
import { AppError } from '@utils/AppError';
import { PlayerStorageDTO } from '@storage/player/PlayerStorageDTO';
import { playersGetByGroup } from './playersGetByGroup';

export async function playersAddByGroup(newPlayer: PlayerStorageDTO, group: string) {
    try {
        const storedPlayers = await playersGetByGroup(group);
        
        // Check if the player name already exists
        const playerAlreadyExists = storedPlayers.filter(player => player.name === newPlayer.name);
        if(playerAlreadyExists.length > 0) {
            throw new AppError("Essa pessoa já estáadicionada em um time!");
        }

        const storage = JSON.stringify([...storedPlayers, newPlayer]);

        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);


    } catch (error) {
        throw error;
    }
}