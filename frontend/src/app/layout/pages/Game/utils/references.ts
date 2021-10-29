type AnimatedCanvas = {
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D
};

let canvas: AnimatedCanvas;

export const setCanvasRef = (canvasRef: AnimatedCanvas) => {
    canvas = canvasRef;
};

export const getCanvasRef = () => canvas;
