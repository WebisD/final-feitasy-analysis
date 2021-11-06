import Character from "../character";
import Breeds from'../character/attributes/breeds';
import { world, merchant, princess, jail } from "../../features";

/* Sprites */
import warriorImage from '../../sprites/images/warrior.png';
import mageImage from '../../sprites/images/mage.png';
import archerImage from '../../sprites/images/archer.png';
import { CharacterFrame} from "../../sprites/enums/characterFrames";

/* Utils */
import { hasCollision } from '../../utils/collision';
import { createCharacterAsync, createRelationPlayerPrincess, createSkillToPlayer } from "../../transactions/create";
import { deleteCharacterAsync, deletePlayerGame } from "../../transactions/delete";

export default class Player extends Character {
    public score: number;
    public pausedGame: boolean;
    public hasWon: boolean;
    public merchantCollision: boolean;

    constructor(breed: string, nickname: string) {
        super();
        this.breed = breed;
        this.nickname = nickname;
        this.score = 0;
        this.hasWon = false;
        this.pausedGame = false;
        this.merchantCollision = false;

        if(breed === Breeds.Guerreiro)
            this.sprite.src = warriorImage
        else if(breed === Breeds.Feiticeiro)
            this.sprite.src = mageImage
        else
            this.sprite.src = archerImage


    }

    public createPlayer = async () => {
        this.id = await createCharacterAsync(this.breed, this.nickname);
        /* If a new player is joining the game, add keyboard event listener */
        window.addEventListener("keydown", this.move, false);
        window.addEventListener("keydown", this.pauseGame, false);
    };

    public move = (e?:KeyboardEvent) => {
        const pressed_key = e!.key.toUpperCase();

        // Interacts with merchant if collides
        if(this.merchantCollision){
            if (pressed_key === 'ENTER')
                this.interactWithMerchant();
        }

        // Kills the colliding enemies
        this.killEnemies();

        if (['W', 'A', 'S', 'D'].includes(pressed_key) && !this.pausedGame){

            if (pressed_key === 'A' && this.x > world.leftLimit){
                this.x -= this.speed;
                this.currentDirection = CharacterFrame.LEFT_DIRECTION;
                
                this.frameY = CharacterFrame.LEFT_DIRECTION;

                this.frameY = CharacterFrame.LEFT_DIRECTION;
                if(hasCollision(jail, this)){
                    this.x += this.speed;
                    this.frameY = CharacterFrame.LEFT_DIRECTION;
                }
                if (hasCollision(merchant, this)){
                    this.merchantCollision = true;
                    this.x += this.speed;
                    this.frameY = CharacterFrame.LEFT_DIRECTION;
                }
                else{
                    this.merchantCollision = false;
                }
            }

            else if (pressed_key === 'D' && this.x < world.rightLimit - this.width*2){
                this.x += this.speed;
                
                this.currentDirection = CharacterFrame.RIGHT_DIRECTION;

                this.frameY = CharacterFrame.RIGHT_DIRECTION;
                if(hasCollision(jail, this)){
                    this.x -= this.speed;
                    this.frameY = CharacterFrame.RIGHT_DIRECTION;
                }
                if (hasCollision(merchant, this)){
                    this.merchantCollision = true;
                    this.x -= this.speed;
                    this.frameY = CharacterFrame.RIGHT_DIRECTION;
                }
                else{
                    this.merchantCollision = false;
                }
            }

            else if (pressed_key === 'S' && this.y < world.bottomLimit - this.height*2){
                this.y += this.speed;

                this.currentDirection = CharacterFrame.DOWN_DIRECTION;
                
                this.frameY = CharacterFrame.DOWN_DIRECTION;
                if(hasCollision(jail, this)){
                    this.y -= this.speed;
                    this.frameY = CharacterFrame.DOWN_DIRECTION;
                }
                if (hasCollision(merchant, this)){
                    this.merchantCollision = true;
                    this.y -= this.speed;
                    this.frameY = CharacterFrame.DOWN_DIRECTION;
                }
                else{
                    this.merchantCollision = false;
                }
            }

            else if (pressed_key === 'W' && this.y > world.topLimit){
                this.y -= this.speed;
                this.currentDirection = CharacterFrame.UP_DIRECTION;

                this.frameY = CharacterFrame.UP_DIRECTION;
                if(hasCollision(jail, this)){
                    this.y += this.speed;
                    this.frameY = CharacterFrame.UP_DIRECTION;
                }
                if (hasCollision(merchant, this)){
                    this.merchantCollision = true;
                    this.y += this.speed;
                    this.frameY = CharacterFrame.UP_DIRECTION;
                }
                else{
                    this.merchantCollision = false;
                }
            }
        
            this.handleCharacterFrame();
        }
    };

    private killEnemies = () => {
        if(!!world.enemies && world.enemies.length) {
            const aliveEnemies = world.enemies.filter(enemy => {
                if (!hasCollision(this, enemy))
                    return true;
                else{
                    this.score++;
                    deleteCharacterAsync(enemy.id);
                    return false;
                }
            });

            if (!aliveEnemies.length){
                this.hasWon = true;
                createRelationPlayerPrincess(this.id, princess.id);
                setTimeout(() => deletePlayerGame(this.id), 30000);
            }

            world.enemies = aliveEnemies;
        }
    };

    private interactWithMerchant = () => {
        merchant.alertHero();
        setTimeout(() => createSkillToPlayer(this.id, merchant.id), 4000);

        world.generateEnemies();
    };

    private pauseGame = (e: KeyboardEvent) => {
        if(e.key === "Backspace"){
            this.pausedGame = !this.pausedGame;
            alert(this.pausedGame ? 'Pausa!' : 'Continua!');
        }
    };

}