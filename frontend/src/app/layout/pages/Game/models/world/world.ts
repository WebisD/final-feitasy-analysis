import IDrawable from "../../common/IDrawable";
import Enemy from '../enemy';
import { player } from "../../features";

// Utils
import { getCanvasRef } from "../../utils/references";
import _ from "lodash";

const worldImage = new Image();
worldImage.src = "https://opengameart.org/sites/default/files/03_10.png";

const scoreImage = new Image();
scoreImage.src = "https://lh3.googleusercontent.com/proxy/-1FTJi2RWmCxv7Hg8V_M71fCBHQXvbI1_GYNDKbmVafSdGcjffOHjrAKzphKeBzOSTGmsHGhNSZfvVrXkqjGBNdL66yYXCkB";

export default class World implements IDrawable {
    // Limits
    public leftLimit:number;
    public topLimit:number;
    public rightLimit:number;
    public bottomLimit:number;

    // Enemies
    public enemies: Enemy[];

    public draw() {
        const { canvas, ctx } = getCanvasRef();

        // World limits
        this.leftLimit = 0;
        this.topLimit = 0;
        this.rightLimit = canvas.width;
        this.bottomLimit = canvas.height;

        ctx.beginPath();
        ctx.drawImage(worldImage, 0, 0, canvas.width, canvas.height);

        //Score
        ctx.fillStyle = "yellow";
        ctx.font = "30px Roboto";
        ctx.drawImage(scoreImage, canvas.width/3, 0, 200, 50);
        ctx.fillText("" + player.score, canvas.width/3 + 200, 35);
    };

    public generateEnemies = () => {
        const { canvas } = getCanvasRef();
        const [minEnemiesAmount, maxEnemiesAmount] = [10, 20];
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
            
            const newEnemy = new Enemy('abc', randomCoordsX, randomCoordsY);
            enemiesList.push(newEnemy);
        };

        this.enemies = enemiesList;
    };
}