import IDrawable from "../../common/IDrawable";
import { getCanvasRef } from "../../utils/references";

const worldImage = new Image();
worldImage.src = "https://cdn.conceptartempire.com/images/05/5265/00-lighter-featured-game-art-world-pixelart.jpg";

export default class World implements IDrawable {
    public leftLimit:number = 0;
    public topLimit:number = 0;
    public rightLimit:number = getCanvasRef()?.canvas.width ?? 0;
    public bottomLimit:number = getCanvasRef()?.canvas.height ?? 0;

    public draw() {
        const { canvas, ctx } = getCanvasRef();
        ctx.beginPath();
        ctx.drawImage(worldImage, 0, 0, canvas.width, canvas.height);
    };
}