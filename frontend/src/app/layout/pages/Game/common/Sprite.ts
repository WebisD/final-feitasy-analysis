import { getCanvasRef } from "../utils/references";

export const drawSprite = (img:HTMLImageElement, sX:number, sY:number, sW:number, sH:number, dX:number, dY:number, dW:number, dH:number) => {
    const { ctx } = getCanvasRef();
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}