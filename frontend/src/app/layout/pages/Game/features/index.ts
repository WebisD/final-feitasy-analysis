import World from "../models/world/world";
import { getCanvasRef } from "../utils/references"

let canvas: HTMLCanvasElement;
let animationFrameId: number;
let ctx: CanvasRenderingContext2D;

const initializeCanvas = () => {
    canvas = getCanvasRef().canvasReference;
    animationFrameId = getCanvasRef().animationFrameId;

    // Set sizes
    canvas.width = window.innerWidth;
    canvas.height = 0.8 * window.innerHeight;

    // Set 2D context
    ctx = canvas.getContext('2d')!;
}

const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    /* DESENHOS AQUI */
 
    const world = new World();
    world.draw();
}

const render = () => {
    draw();
    animationFrameId = window.requestAnimationFrame(render)
} 

export const run = () => {
    initializeCanvas();

    render();
}

export const unmountCanvas = () => {
    window.cancelAnimationFrame(animationFrameId);
}