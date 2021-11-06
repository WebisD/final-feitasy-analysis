import IDrawable from "../../common/IDrawable";
import { drawSprite } from "../../common/Sprite";
import { player, world, princess } from "../../features";

/* Sprite */
import jailImage from "../../sprites/images/jail.png";
import { deleteCharacterAsync } from "../../transactions/delete";
import { hasCollision } from "../../utils/collision";

/* Utils */
import { getCanvasRef } from "../../utils/references";

export default class Jail implements IDrawable {
    public width: number;
    public height: number;
    public x: number;
    public y: number;
    public life: number;
    public isDestroyed: boolean;
    public hasDisappeared: boolean;
    public disappearSpeed: number;
    public sprite: HTMLImageElement = new Image();

    constructor() {
        this.life = 999;
        this.isDestroyed = false;
        this.hasDisappeared = false;
        this.disappearSpeed = 1.5;
        this.sprite.src = jailImage;

        /* Size */
        this.width = 133;
        this.height = 250;
        
        /* Position */
        this.x = getCanvasRef().canvas.width/2 - this.width/2;
        this.y = getCanvasRef().canvas.height/2 - this.height/1.5;
    };

    public draw = () => {
        this.disappearIfWin();
        drawSprite(this.sprite, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height);
    };

    public disappearIfWin = () => {
        if (player.hasWon){
            if (this.y + this.height > 0)
                this.y -= this.disappearSpeed;
            else
                this.hasDisappeared = true;
        }
    }

    public gameOver = () => this.isDestroyed = true;

    public checkEnemyCollision = () => {
        const aliveEnemies = world.enemies.filter(enemy => { 
            if (!hasCollision(this, enemy))
                return true;
            else{
                // deleteCharacterAsync(enemy.id);
                if (this.life-- === 0)
                    this.gameOver(); 
                return false;
            }
        });

        if (!aliveEnemies.length && !player.hasWon){
            // player.hasWon = true;
            // princess.thanksFreedom();
        }
        
        world.enemies = aliveEnemies;
    };
}