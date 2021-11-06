import _ from "lodash";

/* Entities */
import IDrawable from "../../common/IDrawable";
import { player } from "../../features";
import Enemy from '../enemy';

/* Utils */
import { getCanvasRef } from "../../utils/references";

/* Images */
import mapBackground from '../../sprites/images/world.png';
import winImage from '../../sprites/screens/you-win.jpg';
import lostImage from '../../sprites/screens/game-over.png';
import scoreImage from '../../sprites/images/score.png';

export default class World implements IDrawable {
    
    // Map limits
    public leftLimit:number;
    public topLimit:number;
    public rightLimit:number;
    public bottomLimit:number;

    // Sprites
    public mapBackground: HTMLImageElement = new Image();
    public scoreSprite: HTMLImageElement = new Image();

    // Screens
    public winScreen: HTMLImageElement = new Image();
    public lostScreen: HTMLImageElement = new Image();

    //Enemies list
    public enemies: Enemy[];

    constructor(){
        this.mapBackground.src = mapBackground;
        this.lostScreen.src = lostImage;
        this.scoreSprite.src = scoreImage;
    
        this.winScreen.src = winImage;
    }

    public draw() {
        const { canvas } = getCanvasRef();

        this.leftLimit = 0;
        this.topLimit = 0;
        this.rightLimit = canvas.width;
        this.bottomLimit = canvas.height;

        this.drawMap();
        this.drawScore();
    };

    public drawScore = () => {
        const { canvas, ctx } = getCanvasRef();

        ctx.fillStyle = "yellow";
        ctx.font = "30px Roboto";
        ctx.drawImage(this.scoreSprite, canvas.width/3, 0, 200, 50);
        ctx.fillText("" + player.score, canvas.width/3 + 200, 35);
    }

    public drawWinScreen = () => {
        const { canvas, ctx } = getCanvasRef();

        ctx.drawImage(this.winScreen, 0, 0, canvas.width, canvas.height);
    }

    public drawLostScreen = () => {
        const { canvas, ctx } = getCanvasRef();

        ctx.drawImage(this.lostScreen, 0, 0, canvas.width, canvas.height);
    }

    public drawMap = () => {
        const { canvas, ctx } = getCanvasRef();

        ctx.beginPath();
        ctx.drawImage(this.mapBackground, 0, 0, canvas.width, canvas.height);
    }

    public generateEnemies = async () => {
        const { canvas } = getCanvasRef();

        const [minEnemiesAmount, maxEnemiesAmount] = [3, 3]; // Max enemies range
        const offset = 100;

        const enemiesList: Enemy[] = [];
        const enemiesAmount = _.random(minEnemiesAmount, maxEnemiesAmount, false);

        for(let i = 0; i < enemiesAmount; i++){
            const randomCoordsX = 
                _.sample([
                    _.random(-offset, 0), 
                    _.random(canvas.width, canvas.width + offset)
                ])!

            const randomCoordsY = _.random(-offset, canvas.height + offset);
            
            const newEnemy = new Enemy(randomCoordsX, randomCoordsY);
            await newEnemy.createEnemy();

            enemiesList.push(newEnemy);
        };

        this.enemies = enemiesList;
    };
}