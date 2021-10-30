import IDrawable from "../../common/IDrawable"
import { getCanvasRef } from "../../utils/references"

var warriorImage = new Image();
warriorImage.src = "https://i.pinimg.com/originals/0c/b9/19/0cb919c61e34ed0aaaefd10a0eb5c457.gif";
var wizardImage = new Image();
wizardImage.src = "https://i.pinimg.com/originals/9c/6d/a8/9c6da87a758a7e919f54e564d9930bbe.gif";

export default class Character implements IDrawable {
    public id: string;
    public nick: string;
    public type: string;
    public width: number = 75;
    public height: number = 75;
    public color: string = "red";
    public x: number = 100;
    public y: number = 100;
    public speed: number = 10;
    public imagem = new Image();

    constructor(id: string, isPlayer: boolean = false, type: string, nick: string) {
        this.id = id;
        this.type = type;
        this.nick = nick;

        if(type == "Guerreiro"){
            this.imagem = warriorImage
        } else if(type == "Feiticeiro"){
            this.imagem = wizardImage
        }

        /* If a new player is joining the game, add keyboard event listener */
        if (isPlayer)
            window.addEventListener("keydown", this.move, false);
    }

    public draw = () => {
        const { ctx } = getCanvasRef();

        //Limits (gives the illusion of walls)
        var leftLimit = -6;
        var rightLimit = (110 * 11)+8;
        var topLimit = -6 + 32;
        var bottomLimit = (50 * 7);
        if (this.x < leftLimit) { this.x = leftLimit; }
        if (this.x > rightLimit) { this.x = rightLimit; }
        if (this.y < topLimit) { this.y = topLimit; }
        if (this.y > bottomLimit) { this.y = bottomLimit; }

        ctx.fillStyle = "black";
        ctx.font = "15px Roboto";
        ctx.fillText(this.nick, this.x + 10, this.y + 10);

        ctx.fillStyle = this.color;
        ctx.drawImage(this.imagem, this.x, this.y, this.width, this.height);
    };

    private move = (e:KeyboardEvent) => {
        switch(e.key.toUpperCase()){
            case 'A': 
                this.x -= this.speed;
                break;

            case 'D':
                this.x += this.speed;
                break;
            
            case 'S':
                this.y += this.speed;
                break; 
            
            case 'W':
                this.y -= this.speed;
                break;  
        }  
    };

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