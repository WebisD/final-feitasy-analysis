import _ from 'lodash';

// Entities
import Character from '../character';
import { getRandomBreed } from '../character/attributes/breeds';
import { player, jail } from '../../features';

// Sprites
import titanImage from '../../sprites/images/titan.png';
import ifritImage from '../../sprites/images/ifrit.png';
import leviathanImage from '../../sprites/images/leviathan.png';
import odinImage from '../../sprites/images/odin.png';
import bahamutImage from '../../sprites/images/bahamut.png';

// Utils
import { CharacterFrame } from '../../sprites/enums/characterFrames';
import { createCharacterAsync } from '../../transactions/create';


export default class Enemy extends Character{
    private xDistanceFromTarget: number = 0;
    private yDistanceFromTarget: number = 0;
    private moveVertically: boolean = true;
    private directionCount: number = 0;
    private directionCountLimit: number = 30;

    constructor(x: number, y: number) {
        super();
        this.breed = getRandomBreed();
        this.nickname = 'Enemy';
        this.speed = _.random(0.5, 0.5, true);
        this.getRandomEnemySprite()

        // Position
        this.x = x
        this.y = y
    }

    public createEnemy = async () => {
        this.id = await createCharacterAsync(this.breed, this.nickname);
    };

    public update = () => {
        this.draw();
        this.move();
    };

    private getRandomEnemySprite = () => {
        const randomSprite = _.sample([
            {
                sprite: titanImage,
                sX: 40, sY: 56 ,
                frameLimit: 3,
                frameRatio: 6,
                speed: 6
            }, 
            {
                sprite: odinImage,
                sX: 80, sY: 80,
                frameLimit: 3,
                frameRatio: 6,
                speed: 6
            }, 
            {
                sprite: leviathanImage,
                sX: 96, sY: 96,
                frameLimit: 3,
                frameRatio: 6,
                speed: 6 
            }, 
            {
                sprite: ifritImage,
                sX: 80, sY: 80,
                frameLimit: 3,
                frameRatio: 6,
                speed: 4
            }   
        ])!;

        this.sprite.src = randomSprite.sprite;
        this.width = randomSprite.sX;
        this.height = randomSprite.sY;
        this.frameLimit = randomSprite.frameLimit;
        this.frameRatio = randomSprite.frameRatio;
        this.speed = randomSprite.speed;
    };

    protected move = (e?: KeyboardEvent) => {
        if (player.pausedGame) return;

        this.xDistanceFromTarget = jail.x - this.x;
        this.yDistanceFromTarget = jail.y - this.y;

        if (this.xDistanceFromTarget > this.yDistanceFromTarget && !this.moveVertically) {
            this.directionCount++;

            if (this.directionCount == this.directionCountLimit){
                if (this.yDistanceFromTarget >= this.distanceThreshold || this.yDistanceFromTarget <= -this.distanceThreshold)
                    this.moveVertically = true;
                this.directionCount = 0;
            }

            if (this.xDistanceFromTarget + this.distanceThreshold > 0) {
                this.x += this.speed;
                this.currentDirection = CharacterFrame.RIGHT_DIRECTION;
            }
            else {  
                this.x -= this.speed;
                this.currentDirection = CharacterFrame.LEFT_DIRECTION;
            }
        }
        else if (this.moveVertically){
            this.directionCount++;

            if (this.directionCount == this.directionCountLimit){
                this.moveVertically = false ;
                this.directionCount = 0;
            }

            if (this.yDistanceFromTarget + this.distanceThreshold > 0) {
                this.y += this.speed;
                this.currentDirection = CharacterFrame.DOWN_DIRECTION;
            }
            else {
                this.y -= this.speed;
                this.currentDirection = CharacterFrame.UP_DIRECTION;
            }
        }

        this.handleCharacterFrame();    
    };
}