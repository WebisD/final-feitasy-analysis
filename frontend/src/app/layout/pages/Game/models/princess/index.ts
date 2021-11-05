import Character from "../character";

/* Sprite */
import princessImage from "../../sprites/images/princess.png";

/* Utils*/
import { getCanvasRef } from "../../utils/references";
import { createCharacterAsync } from "../../transactions/create";

export default class Princess extends Character {
    public dead: boolean;

    constructor() {
        super();
        this.breed = "Humano";
        this.nickname = "Princess";
        this.dead = false;
        this.sprite.src = princessImage;

        // Position
        this.x = getCanvasRef().canvas.width/2 - this.width;
        this.y = getCanvasRef().canvas.height/2 - this.height;
    }

    public createPrincess = async () => {
        this.id = await createCharacterAsync(this.breed, this.nickname);
    };

    protected move = () => {

    }
}; 