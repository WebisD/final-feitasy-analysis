import World from "../models/world/world";
import { getCanvasRef } from "../utils/references"

let canvas: HTMLCanvasElement;
let animationFrameId: number;
let ctx: CanvasRenderingContext2D;

export const initializeCanvas = () => {
    canvas = getCanvasRef().canvasReference;
    animationFrameId = getCanvasRef().animationFrameId;

    // Set sizes
    canvas.width = window.innerWidth;
    canvas.height = 0.8 * window.innerHeight;

    // Set 2D context
    ctx = canvas.getContext('2d')!;
}

const draw = () => {
    const world = new World();

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    world.draw();
}

const render = () => {
    draw();
} 

export const run = () => {
    initializeCanvas();
    animationFrameId = window.requestAnimationFrame(render);

    render();
}

export const unmountCanvas = () => {
    window.cancelAnimationFrame(animationFrameId);
}