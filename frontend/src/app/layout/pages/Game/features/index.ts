import World from "../models/world/world";
import { getCanvasRef } from "../utils/references"

let canvas: HTMLCanvasElement;
let animationFrameId: number;
let context: CanvasRenderingContext2D;

export const initializeCanvas = () => {
    canvas = getCanvasRef().canvasReference;
    animationFrameId = getCanvasRef().animationFrameId;

    // Set sizes
    canvas.width = window.innerWidth;
    canvas.height = 0.8 * window.innerHeight;

    // Set 2D context
    context = canvas.getContext('2d')!;
}

const draw = (ctx: CanvasRenderingContext2D) => {
    const world = new World();

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    world.draw();
}

const render = () => {
    draw(context);
} 

export const run = () => {
    initializeCanvas();
    animationFrameId = window.requestAnimationFrame(render);

    render();
}

export const unmountCanvas = () => {
    window.cancelAnimationFrame(animationFrameId);
}