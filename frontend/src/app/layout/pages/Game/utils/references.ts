let canvas: HTMLCanvasElement | null = null

export const setCanvasRef = (canvasRef: HTMLCanvasElement) => {
    canvas = canvasRef;
}

export const getCanvasRef = () => canvas!
