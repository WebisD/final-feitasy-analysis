import Character from "../models/character";
import Jail from "../models/jail";

export const hasCollision = (
    entity1: Character | Jail, 
    entity2: Character
) => 
    entity1.x < entity2.x + entity2.width &&
    entity1.x + entity1.width > entity2.x &&
    entity1.y < entity2.y + entity2.height &&
    entity1.y + entity1.height > entity2.y;
