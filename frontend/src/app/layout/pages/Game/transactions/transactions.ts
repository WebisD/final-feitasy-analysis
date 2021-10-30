import { driver } from "../../../../services/database/connection";
import { v4 as newUuid } from 'uuid';

/* Random attributes */
import { getRandomBreed } from "../models/character/attributes/breeds";
import { getRandomClass } from "../models/character/attributes/class";

export const createCharacterAsync = async (): Promise<string> => {
    const session = driver.session();

        const characterId = newUuid()

        await session.writeTransaction(async tx => {
            const breedName = getRandomBreed();
            const className = getRandomClass();

            await tx.run(`
                CREATE (:Character
                    {
                        id_pk: $characterId,
                        type_char:0,
                        name:'Player1',
                        caption: 'Player1',
                        gender:'Male',
                        level: 1
                    }) 
            `, { characterId });
        });

    session.close();

    return characterId;
};