import IDrawable from "../../common/IDrawable";
import { drawSprite } from "../../common/Sprite";
import { getCanvasRef } from "../../utils/references";

export default abstract class Character implements IDrawable {
    public id: string;
    public breed: string;
    public nickname: string;
    public width: number = 32;
    public height: number = 48;
    public x: number = 500;
    public y: number = 500;
    public speed: number = 10;

    // Sprites
    public sprite: HTMLImageElement = new Image();
    public frameX: number = 0;
    public frameY: number = 0;
    
    protected abstract move: (e?: KeyboardEvent) => void;

    public draw = () => {
        this.drawNickname();
        drawSprite(this.sprite, this.width*this.frameX, this.height*this.frameY, this.width, this.height, this.x, this.y, this.width*2, this.height*2);
    };

    protected drawNickname = () => {
        const { ctx } = getCanvasRef();

        const nicknamePosition = {
            x: this.x + this.width/2,
            y: this.y - 7
        };

        ctx.fillStyle = "white";
        ctx.font = "bold 15px Courier New";
        ctx.fillText(this.nickname, nicknamePosition.x, nicknamePosition.y);
    };

    protected handleCharacterFrame = () => {
        if (this.frameX < 3) this.frameX++;
        else this.frameX = 0;
    };
}