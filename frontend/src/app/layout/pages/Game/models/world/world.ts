import _ from "lodash";
import IDrawable from "../../common/IDrawable";
import Enemy from '../enemy';

import { player } from "../../features";

// Utils
import { getCanvasRef } from "../../utils/references";
import { createCharacterAsync } from "../../transactions/create";


const worldImage = new Image();
worldImage.src = "https://opengameart.org/sites/default/files/03_10.png";

const scoreImage = new Image();
scoreImage.src = "https://lh3.googleusercontent.com/proxy/-1FTJi2RWmCxv7Hg8V_M71fCBHQXvbI1_GYNDKbmVafSdGcjffOHjrAKzphKeBzOSTGmsHGhNSZfvVrXkqjGBNdL66yYXCkB";

const winImage = new Image();
winImage.src = "https://memegenerator.net/img/instances/68338043.jpg";

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

        if(!!this.enemies){
            if(this.enemies.length === 0){
                ctx.drawImage(winImage, 0, 0, canvas.width, canvas.height);
                // window.location.reload();
            }
        }
    };

    public generateEnemies = async () => {
        const { canvas } = getCanvasRef();
        const [minEnemiesAmount, maxEnemiesAmount] = [3, 3];
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

            const enemyId = await createCharacterAsync(newEnemy.breed, newEnemy.nickname);

            newEnemy.id = enemyId;

            enemiesList.push(newEnemy);
        };

        this.enemies = enemiesList;
    };
}