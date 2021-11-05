import { drawSprite } from "../../common/Sprite";

/* Sprite */
import merchantImage from "../../sprites/images/merchant.png";

export default class Jail {
    public widht: number;
    public height: number;
    public x: number;
    public y: number;
    public sprite: HTMLImageElement = new Image();

    constructor(){
        this.sprite.src = merchantImage;
    }

    public draw = () => {
        //this.drawNickname();
        //drawSprite(this.sprite, this.width*this.frameX, this.height*this.frameY, this.width, this.height, this.x, this.y, this.width*2, this.height*2);
    };
}