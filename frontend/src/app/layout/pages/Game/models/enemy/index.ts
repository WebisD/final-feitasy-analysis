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
                sX: 40, sY: 56 
            }, 
            {
                sprite: odinImage,
                sX: 80, sY: 80 
            }, 
            {
                sprite: leviathanImage,
                sX: 96, sY: 96 
            }, 
            {
                sprite: bahamutImage,
                sX: 96, sY: 96 
            }, 
            {
                sprite: ifritImage,
                sX: 80, sY: 80 
            }, 
        ])!;

        this.sprite.src = randomSprite.sprite;
        this.width = randomSprite.sX;
        this.height = randomSprite.sY;
    };

    protected move = (e?: KeyboardEvent) => {
        const distanceJailX = jail.x - this.x;
        const distanceJailY = jail.y - this.y;

        if (!player.pausedGame){
            if (distanceJailX > 0) {
                this.x += this.speed;
                this.frameY = CharacterFrame.RIGHT_DIRECTION;
            } else {
                this.x -= this.speed;
                this.frameY = CharacterFrame.LEFT_DIRECTION;
            }

            if (distanceJailY > 0) {
                this.y += this.speed
                //this.frameY = CharacterFrame.DOWN_DIRECTION;
            } else {
                this.y -= this.speed
                //this.frameY = CharacterFrame.UP_DIRECTION;
            }

            this.handleCharacterFrame();
        }
    };
}