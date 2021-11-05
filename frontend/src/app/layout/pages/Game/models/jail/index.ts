import { drawSprite } from "../../common/Sprite";
import { princess, world } from "../../features";

/* Sprite */
import jailImage from "../../sprites/images/jail.png";
import { hasCollision } from "../../utils/collision";

/* Utils */
import { getCanvasRef } from "../../utils/references";

export default class Jail {
    public width: number;
    public height: number;
    public x: number;
    public y: number;
    public life: number;
    public sprite: HTMLImageElement = new Image();

    constructor(){
        this.life = 5;

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

    public gameOver = () => princess.dead = true;

    public checkEnemyCollision = () => {
        world.enemies = world.enemies.filter(enemy => { 
            if (!hasCollision(this, enemy))
                return true;
            else{
                if (this.life-- === 0)
                    this.gameOver(); 
                return false;
            }
        });
    };
}