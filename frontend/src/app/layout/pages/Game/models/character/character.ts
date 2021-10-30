import IDrawable from "../../common/IDrawable"
import { getCanvasRef } from "../../utils/references"

export default class Character implements IDrawable {
    private width: number = 30
    private height: number = 30
    private color: string = "red"
    private x: number = 100
    private y: number = 100
    private speed: number = 10
    
    constructor () {
        window.addEventListener("keydown", this.move, false);
    }

    public draw = () => {
        const { ctx } = getCanvasRef();

        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };

    private move = (e:KeyboardEvent) => {
        switch(e.key.toUpperCase()){
            case 'A': 
                this.x -= this.speed;
                break;

            case 'D':
                this.x += this.speed;
                break;
        }  
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