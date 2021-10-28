interface IAnimatedCanvas {
    canvasReference: HTMLCanvasElement;
    animationFrameId: number;
};

let canvas: IAnimatedCanvas | null = null

export const setCanvasRef = (canvasRef: IAnimatedCanvas) => {
    canvas = canvasRef;
}

export const getCanvasRef = () => canvas!
