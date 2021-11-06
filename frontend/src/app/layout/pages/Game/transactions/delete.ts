import { driver } from "../../../../services/database/connection";

export const deleteCharacterAsync = async (characterId: string): Promise<void> => {
    const session = driver.session();

        await session.writeTransaction(async tx => {
            await tx.run(`
                match (c:Character)-[r]->(m)
                where c.id_pk='${characterId}'
                delete c,r,m
            `);
        });

    session.close();
};

export const deletePlayerGame = async (playerId: string): Promise<void> => {
    const session = driver.session();

        await session.writeTransaction(async tx => {
            await tx.run(`
                match (c)-[r]->(m)
                where c.game_id='${playerId}'
                delete r,c,m
            `);
        });

    session.close();
}
