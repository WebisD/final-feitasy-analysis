import _ from 'lodash';

// Entities
import Character from '../character';
import { getRandomBreed } from '../character/attributes/breeds';
import { player } from '../../features';

// Sprites
import warriorImage from '../../sprites/images/warrior.png';
import mageImage from '../../sprites/images/mage.png';
import archerImage from '../../sprites/images/archer.png';

// Utils
import { CharacterFrame } from '../../sprites/enums/characterFrames';

export default class Enemy extends Character{
    constructor(id: string, x: number, y: number) {
        super();
        this.id = id;
        this.breed = getRandomBreed();
        this.nickname = 'Enemy';
        this.speed = _.random(0.1, 1.6, true);
        this.sprite.src = this.getRandomEnemySprite();

        // Position
        this.x = x
        this.y = y
    }

    public update = () => {
        this.draw();
        this.move();
    };

    private getRandomEnemySprite: any = () => _.sample([warriorImage, mageImage, archerImage])

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