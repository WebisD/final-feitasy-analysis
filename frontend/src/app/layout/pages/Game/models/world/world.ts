import IDrawable from "../../common/IDrawable";
import Enemy from '../enemy';
import _ from "lodash";

// Utils
import { getCanvasRef } from "../../utils/references";
import { createCharacterAsync } from "../../transactions/create";

const worldImage = new Image();
worldImage.src = "https://opengameart.org/sites/default/files/03_10.png";

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
    };

    public generateEnemies = async () => {
        const { canvas } = getCanvasRef();
        const [minEnemiesAmount, maxEnemiesAmount] = [3, 3];
        const offset = 300;

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