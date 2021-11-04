import Character from "../character";

/* Sprite */
import merchantImage from "../../sprites/images/merchant.png";

/* Utils*/
import { getCanvasRef } from "../../utils/references";

export default class Merchant extends Character {
    constructor(id: string) {
        super();
        this.id = id;
        this.breed = "Merchator";
        this.nickname = "Merchator";
        this.sprite.src = merchantImage;

        // Position
        this.x = getCanvasRef().canvas.width - this.width - 200;
        this.y = this.height + 5;
    }

    public alertHero = () => alert("Mercador: NOS PROTEJA, SÁBIO HEROI!");

    // Merchant is static in the map
    protected move = () => {};
}; 