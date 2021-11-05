import { drawSprite } from "../../common/Sprite";

/* Sprite */
import jailImage from "../../sprites/images/jail.png";

/* Utils */
import { getCanvasRef } from "../../utils/references";

export default class Jail {
    public width: number;
    public height: number;
    public x: number;
    public y: number;
    public sprite: HTMLImageElement = new Image();

    constructor(){
        this.sprite.src = jailImage;

        /* Size */
        this.width = 133;
        this.height = 250;
        
        /* Position */
        this.x = getCanvasRef().canvas.width/2 - this.width/2;
        this.y = getCanvasRef().canvas.height/2 - this.height/1.5;
    };

    public draw = () => {
        drawSprite(this.sprite, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height);
    };
}