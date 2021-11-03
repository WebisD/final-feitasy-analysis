import IDrawable from "../../common/IDrawable";
import { getCanvasRef } from "../../utils/references";
import { drawSprite } from "../../common/Sprite"

//warriorImage.src = "https://i.pinimg.com/originals/0c/b9/19/0cb919c61e34ed0aaaefd10a0eb5c457.gif";
//wizardImage.src = "https://i.pinimg.com/originals/9c/6d/a8/9c6da87a758a7e919f54e564d9930bbe.gif";*/

import warriorImage from './sheets/warrior.png';
import mageImage from './sheets/mage.png';
import archerImage from './sheets/archer.png';
import { world } from "../../features";

export default class Character implements IDrawable {
    public id: string;
    public nickname: string;
    public type: string;
    public width: number = 32;
    public height: number = 48;
    public color: string = "red";
    public x: number = 100;
    public y: number = 100;
    public speed: number = 10;

    public sprite: HTMLImageElement = new Image();
    public frameX: number = 0;
    public frameY: number = 0;

    constructor(id: string, isPlayer: boolean = false, type: string, nickname: string) {
        this.id = id;
        this.type = type;
        this.nickname = nickname;

        if(type === "Guerreiro"){
            this.sprite.src = warriorImage
        } else if(type === "Feiticeiro"){
            this.sprite.src = mageImage
        }else if(type === "Arqueiro"){
            this.sprite.src = archerImage
        }

        /* If a new player is joining the game, add keyboard event listener */
        if (isPlayer)
            window.addEventListener("keydown", this.move, false);
    }

    public draw = () => {
        const { ctx } = getCanvasRef();

        ctx.fillStyle = "black";
        ctx.font = "15px Roboto";
        ctx.fillText(this.nickname, this.x + this.width/2, this.y - 7);

        //ctx.fillStyle = this.color;

        drawSprite(this.sprite, this.width*this.frameX, this.height*this.frameY, this.width, this.height, this.x, this.y, this.width*2, this.height*2);
        //ctx.drawImage(this.imagem, this.x, this.y, this.width, this.height);
    };

    private move = (e:KeyboardEvent) => {
        
        const pressed_key = e.key.toUpperCase();
        
        if (pressed_key === 'A' && this.x > world.leftLimit){
            this.x -= this.speed;
            this.frameY = 1;
        }
        if (pressed_key === 'D' && this.x < world.rightLimit){
            this.x += this.speed;
            this.frameY = 2;
        }
        if (pressed_key === 'S' && this.y < world.bottomLimit){
            this.y += this.speed;
            this.frameY = 0;
        }
        if (pressed_key === 'W' && this.y > world.topLimit){
            this.y -= this.speed;
            this.frameY = 3;
        } 
        this.handlePlayerFrame()
    };

    private handlePlayerFrame = () => {
        if (this.frameX < 3) this.frameX++;
        else this.frameX = 0;
    }

}

/*type x = "abc" | "def"
const y:x = "abc"
export const x = 5

// atributos/métodos públicos em uma classe podem ser omitidos (o typescript infere que são públicos)
        public width: number = 30
        width: number = 30

function func(a?:number, b?:string): number {
    return 5
}

const func2 = (a:number, b:number) : number =>{
    return 2
} 

const func3 = (a:number, b:number) : number => 2

const func4 = function(a:number, b:number) {return 5}


interface iPLayer extends raca{
    name?:string | number ,
    classe:string | number,
    level?: {car:number, test:string},
    bater: (quant:string) => number,
    defender?(quant:number): boolean
} 

interface raca {
    nome_raca?:string | number,
    desc?:string | number
}

const pl: iPLayer = {
    classe : "aaaaa",
    name: func(),
    level: {car:9, test:"aaaa"},
    bater: (quant:string) => {return 7}
}

pl.bater("aaaa")

let aha:typeof pl

const pl2 = pl?.name ?? 'qqq' + 'c'

export type Character2 = {
    name:string | number,
    classe:string | number
} | string | number

const char: Character2 = {name:"aa", classe:"aa"}

export enum Character {
    name = "Carlinhos",
    classe = "Humano"
}

Character.classe*/