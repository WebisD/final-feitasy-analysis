import Character from "../character";

/* Sprite */
import merchantImage from "../../sprites/images/merchant.png";

/* Utils*/
import { getCanvasRef } from "../../utils/references";

export default class Princess extends Character {
    constructor(id: string) {
        super();
        this.id = id;
        this.breed = "Humano";
        this.nickname = "Princess";
        this.sprite.src = merchantImage;

        // Position
        this.x = getCanvasRef().canvas.width/2 - this.width/2;
        this.y = getCanvasRef().canvas.height/2 - this.height;
    }

    protected move = () => {

    }
}; 