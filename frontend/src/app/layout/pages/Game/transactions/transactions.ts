import { driver } from "../../../../services/database/connection"
import { getRandomBreed } from "../models/character/attributes/breeds";
import { getRandomClass } from "../models/character/attributes/class";
import { createCharacterQuery } from "./constants/queriesConstants";

export const createCharacterAsync = async () => {
    const session = driver.session();

        await session.writeTransaction(async tx => {
            const breedName = getRandomBreed();
            const className = getRandomClass();

            const result = await tx.run(createCharacterQuery(breedName, className));
            
            console.log(result); 
        });

    session.close();
};