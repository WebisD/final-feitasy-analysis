import IDrawable from "../../common/IDrawable";
import { getCanvasRef } from "../../utils/references";
import { drawSprite } from "../../common/Sprite";

import merchantImage from "./sheets/merchant.png";
import { world } from "../../features";

export default class Merchant implements IDrawable {
    public id: string;
    public nickname: string;
    public type: string;
    public width: number = 32;
    public height: number = 48;
    public color: string = "red";
    public x: number = 1100;
    public y: number = 50;
    public speed: number = 10;

    public sprite: HTMLImageElement = new Image();
    public frameX: number = 0;
    public frameY: number = 0;

    constructor(id: string, isPlayer: boolean = false, type: string, nickname: string) {
        this.id = id;
        this.type = type;
        this.nickname = nickname;
        this.sprite.src = merchantImage
    }

    public draw = () => {
        const { ctx, canvas } = getCanvasRef();

        this.x = canvas.width - this.width - 200
        this.y = this.height + 5

        ctx.fillStyle = "white";
        ctx.font = "bold 20px Courier New";
        ctx.fillText(this.nickname, this.x + this.width/2 - 20, this.y);

        //ctx.fillStyle = this.color;

        drawSprite(this.sprite, this.width*this.frameX, this.height*this.frameY, this.width, this.height, this.x, this.y, this.width*2, this.height*2);
        //ctx.drawImage(this.imagem, this.x, this.y, this.width, this.height);
    };
}