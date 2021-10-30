import World from "../models/world/world";
import { getCanvasRef } from "../utils/references"
import Character from "../models/character/character"
import { createCharacterAsync } from "../transactions/transactions";

let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;


let world = new World();
let character: Character;
//let enemies:Character[] = [new Character()];


const createPlayer = async () => {
    const playerId = await createCharacterAsync();
    character = new Character(playerId, true);
};

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
    if (!!character)
        draw();
        
    window.requestAnimationFrame(render)
} 

export const run = () => {
    initializeCanvas();
    createPlayer();

    render();
}
