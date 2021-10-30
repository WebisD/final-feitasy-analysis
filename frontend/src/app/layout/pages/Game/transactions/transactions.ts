import { driver } from "../../../../services/database/connection";
import { v4 as newUuid } from 'uuid';

/* Random attributes */
import { getRandomBreed } from "../models/character/attributes/breeds";
import { getRandomClass } from "../models/character/attributes/class";

export const createCharacterAsync = async (): Promise<string> => {
    const session = driver.session();

        const characterId = newUuid();

        // Character
        await session.writeTransaction(async tx => {
            await tx.run(`
                CREATE (:Character
                    {
                        id_pk: '${characterId}',
                        type_char:0,
                        name:'Novo Character',
                        caption: 'Novo Character',
                        gender:'Male',
                        level: 1,
                        color: '#5478dd'
                    }
                ) 
            `);
        });
        
        // Inventory
        await session.writeTransaction(async tx => {
            await tx.run(createInventoryQuery(characterId));
        });

        // Breed
        await session.writeTransaction(async tx => {
            await tx.run(createBreedQuery(characterId));
        });

    session.close();

    return characterId;
};

const createInventoryQuery = (characterId: string):string =>
    `match (c:Character { id_pk: '${characterId}' } )
    merge (c)-[:has]->(
        n2:Inventory
        {
            id_pk: '${newUuid()}',
            caption: 'Inventory',
            current_cap: 100,
            max_cap: 200,
            color: '#bfc128'
        }
    )`;

const createBreedQuery = (characterId: string): string => {
    const breedName = getRandomBreed();

    return `
        match (c:Character { id_pk: '${characterId}' } )
        merge (c)-[b:Belong]->(br:Breed
            {
                id_pk:'${newUuid()}',
                desc_class:'${breedName}',
                caption: '${breedName}',
                bonus_breed:10,
                color: '#409c82'
            }
        )
    `;
};

