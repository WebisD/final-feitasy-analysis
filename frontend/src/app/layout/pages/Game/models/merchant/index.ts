import Character from "../character";

/* Sprite */
import merchantImage from "../../sprites/images/merchant.png";

/* Utils*/
import { getCanvasRef } from "../../utils/references";
import { createCharacterAsync } from "../../transactions/create";

export default class Merchant extends Character {
    constructor() {
        super();
        this.breed = "Merchator";
        this.nickname = "Merchator";
        this.sprite.src = merchantImage;

        // Position
        this.x = getCanvasRef().canvas.width - this.width - 200;
        this.y = this.height + 5;
    }

    public createMerchant = async () => {
        this.id = await createCharacterAsync(this.breed, this.nickname);
    };

    public alertHero = () => alert("Mercador: NOS PROTEJA, SÁBIO HEROI!");

    // Merchant is static in the map
    protected move = () => {};
}; 