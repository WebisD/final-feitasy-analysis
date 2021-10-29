import World from "../models/world/world";
import { getCanvasRef } from "../utils/references"
import Character from "../models/character/character"

let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;


const world = new World();
const character = new Character();
//let enemies:Character[] = [new Character()];


const initializeCanvas = () => {
    canvas = getCanvasRef().canvas;

    // Set sizes
    canvas.width = window.innerWidth;
    canvas.height = 0.8 * window.innerHeight;

    // Set 2D context
    ctx = getCanvasRef().ctx;
}

const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    /* DESENHOS AQUI */
    world.draw();
    character.draw();
    
}

const render = () => {
    draw();
    window.requestAnimationFrame(render)
} 

export const run = () => {
    initializeCanvas();

    render();
}
