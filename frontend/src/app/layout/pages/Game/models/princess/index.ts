import Character from "../character";

/* Sprite */
import princessImage from "../../sprites/images/princess.png";

/* Utils*/
import { getCanvasRef } from "../../utils/references";
import { createCharacterAsync } from "../../transactions/create";

export default class Princess extends Character {
    constructor() {
        super();
        this.breed = "Humano";
        this.nickname = "Princess";
        this.sprite.src = princessImage;

        // Position
        this.x = getCanvasRef().canvas.width/2 - this.width;
        this.y = getCanvasRef().canvas.height/2 - this.height;
    }

    public createPrincess = async () => {
        this.id = await createCharacterAsync(this.breed, this.nickname);
    };

    public thanksFreedom = () => alert("Princesa: Agora eu estou livre!!!")

    protected move = () => {

    }
}; 