import IDrawable from "../../common/IDrawable";
import { drawSprite } from "../../common/Sprite";
import { getCanvasRef } from "../../utils/references";

export default abstract class Character implements IDrawable {
    public id: string;
    public breed: string;
    public nickname: string;
    public width: number = 32;
    public height: number = 48;
    public x: number = 100;
    public y: number = 100;
    public speed: number = 8;

    // Sprites
    // Sprites
    public sprite: HTMLImageElement = new Image();
    public frame: number = 0;
    public frameY: number = 0;
    public frameLimit: number = 3;
    public distanceThreshold: number = 20;
    public currentDirection: number = 0;
    public currentMovement: number = 0;
    public frameCount: number = 0;
    public frameRatio: number = 4;
    public size: number = 2;
    
    protected abstract move: (e?: KeyboardEvent) => void;

    public draw = () => {
        this.drawNickname();
        drawSprite(this.sprite, this.width*this.frame, this.currentDirection*this.height, this.width, this.height, this.x, this.y, this.width*this.size, this.height*this.size);
    };

    protected drawNickname = () => {
        const { ctx } = getCanvasRef();

        const nicknamePosition = {
            x: this.x - this.width/4,
            y: this.y - 7
        };

        ctx.fillStyle = "white";
        ctx.font = "bold 15px Courier New";
        ctx.fillText(this.nickname, nicknamePosition.x, nicknamePosition.y);
    };

    protected handleCharacterFrame = () => {
        this.frameCount++;

        if (this.frameCount >= this.frameRatio){
            this.frameCount = 0;    
            this.frame++;
        }
        if (this.frame > this.frameLimit) {
            this.frame = 0;
        }
    };
}