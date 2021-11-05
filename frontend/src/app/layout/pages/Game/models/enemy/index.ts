import _ from 'lodash';

// Entities
import Character from '../character';
import { getRandomBreed } from '../character/attributes/breeds';
import { player } from '../../features';

// Sprites
import titanImage from '../../sprites/images/titan.png';
import ifritImage from '../../sprites/images/ifrit.png';
import leviathanImage from '../../sprites/images/leviathan.png';
import odinImage from '../../sprites/images/odin.png';
import bahamutImage from '../../sprites/images/bahamut.png';

// Utils
import { CharacterFrame } from '../../sprites/enums/characterFrames';


export default class Enemy extends Character{
    constructor(id: string, x: number, y: number) {
        super();
        this.id = id;
        this.breed = getRandomBreed();
        this.nickname = 'Enemy';
        this.speed = _.random(0.1, 1.6, true);
        this.getRandomEnemySprite()

        // Position
        this.x = x
        this.y = y
    }

    public update = () => {
        this.draw();
        this.move();
    };

    /*
    import titanImage from '../../sprites/images/titan.png';
    import ifritImage from '../../sprites/images/ifrit.png';
    import leviathanImage from '../../sprites/images/leviathan.png';
    import odinImage from '../../sprites/images/odin.png';
    import bahamutImage from '../../sprites/images/bahamut.png';
    
    */

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
                sprite: ifritImage,
                sX: 80, sY: 80 
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
        const distancePlayerX = player.x - this.x;
        const distancePlayerY = player.y - this.y;

        if (!player.pausedGame){
            if (distancePlayerX > 0) {
                this.x += this.speed;
                this.frameY = CharacterFrame.RIGHT_DIRECTION;
            } else {
                this.x -= this.speed;
                this.frameY = CharacterFrame.LEFT_DIRECTION;
            }

            if (distancePlayerY > 0) {
                this.y += this.speed
                this.frameY = CharacterFrame.DOWN_DIRECTION;
            } else {
                this.y -= this.speed
                this.frameY = CharacterFrame.UP_DIRECTION;
            }

            this.handleCharacterFrame();
        }
    };
}