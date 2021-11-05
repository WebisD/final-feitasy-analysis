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