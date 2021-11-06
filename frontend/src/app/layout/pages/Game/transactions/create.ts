import { driver } from "../../../../services/database/connection";
import { v4 as newUuid } from 'uuid';

import { player, princess } from "../features";

/* Random attributes */
import { getRandomBreed } from "../models/character/attributes/breeds";
import { getRandomSkill } from "../models/character/attributes/skill";

export const createCharacterAsync = async (
    characterBreed?: string, 
    nickname?: string
): Promise<string> => {

    const session = driver.session();

        const characterId = newUuid();
        
        // Character
        await session.writeTransaction(async tx => {
            await tx.run(`
                CREATE (:Character
                    {
                        id_pk: '${characterId}',
                        type_char:0,
                        name: ${ `'${nickname ?? 'Novo Character'}'`},
                        caption: ${ `'${nickname ?? 'Novo Character'}'`},
                        gender:'Male',
                        level: 1,
                        color: '#5478dd',
                        game_id: '${player?.id ?? characterId}'
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
            await tx.run(createBreedQuery(characterId, characterBreed));
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
            color: '#bfc128',
            game_id: '${player.id}'
        }
    )`;

const createBreedQuery = (
    characterId: string, 
    characterBreed?: string
): string => {

    const breedName = characterBreed ?? getRandomBreed();

    return `
        match (c:Character { id_pk: '${characterId}' } )
        merge (c)-[b:Belong]->(br:Breed
            {
                id_pk:'${newUuid()}',
                desc_class:'${breedName}',
                caption: '${breedName}',
                bonus_breed:10,
                color: '#409c82',
                game_id: '${player.id}'
            }
        )
    `;
};


export const createRelationPlayerPrincess = async (
    playerId: string, 
    princessId: string
): Promise<void> => {
    const today = new Date();
    const dateString = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`

    const session = driver.session();

        await session.writeTransaction(async tx => {
            await tx.run(`
                match (p:Character)
                where p.game_id='${playerId}' and p.id_pk = '${playerId}'
                match(ps:Character) where ps.game_id = p.game_id and ps.id_pk = '${princessId}'
                
                create (p)-[h:Help{help_time:'${dateString}'}]->(ps)
            `);
        });
        
    session.close();
};


export const createSkillToPlayer = async (
    playerId: string,
    merchatorId: string
): Promise<void> => {

    const today = new Date();
    const dateString = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`

    const skill = getRandomSkill();

    const session = driver.session();

    await session.writeTransaction(async tx => {
        await tx.run(`
            match (p:Character)
            where p.game_id='${playerId}' and p.id_pk = '${playerId}'
            match (m:Character) where m.game_id = p.game_id and m.id_pk = '${merchatorId}'
            create (p)-[i:Interacts{interact_time:'${dateString}'}]->(m)
            create (p)-[:has]->(s:Skill
                {
                    id_pk: '${newUuid()}',
                    caption: '${skill}',
                    skill_name: '${skill}',
                    desc_skill: '${skill}',
                    type_skill: 0,
                    coldown:10,
                    duration:3,
                    casting_time:0.00001,
                    points:3
                })
        `);
    });
    
    session.close();
}
