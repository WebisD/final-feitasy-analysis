import { driver } from "../../../../services/database/connection"

/* Queries constants */
import { createCharacterQuery } from "./constants/queriesConstants";

/* Random attributes */
import { getRandomBreed } from "../models/character/attributes/breeds";
import { getRandomClass } from "../models/character/attributes/class";

export const createCharacterAsync = async () => {
    const session = driver.session();

        await session.writeTransaction(async tx => {
            const breedName = getRandomBreed();
            const className = getRandomClass();

            //const result = await tx.run(createCharacterQuery(breedName, className));
            const result = await tx.run(`
                MATCH (all_char:Character)
                WITH {num_char: COUNT(all_char)} AS keys
                CREATE (:Character
                        {
                            id_pk:keys.num_char,
                            id_breed_fk:0,
                            id_class_fk:0,
                            id_skills_fk:0,
                            type_char:0,
                            name:'Player1',
                            caption: 'Player1',
                            gender:'Male',
                            level: 1
                        }) 
            
            `);

            console.log(result); 
        });

    session.close();
};