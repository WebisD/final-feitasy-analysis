import Character from "../character";

/* Sprite */
import princessImage from "../../sprites/images/princess.png";

/* Utils*/
import { getCanvasRef } from "../../utils/references";

export default class Princess extends Character {
    constructor(id: string) {
        super();
        this.id = id;
        this.breed = "Humano";
        this.nickname = "Princess";
        this.sprite.src = princessImage;

        // Position
        this.x = getCanvasRef().canvas.width/2 - this.width;
        this.y = getCanvasRef().canvas.height/2 - this.height;
    }

    protected move = () => {

    }
}; 