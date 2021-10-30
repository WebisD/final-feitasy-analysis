import IDrawable from "../../common/IDrawable";
import { getCanvasRef } from "../../utils/references";

var worldImage = new Image();
worldImage.src = "https://cdn.conceptartempire.com/images/05/5265/00-lighter-featured-game-art-world-pixelart.jpg";

export default class World implements IDrawable {
    private floorSize: number[] = [2000, 5]; 

    draw() {
        const { canvas, ctx } = getCanvasRef();

        ctx.beginPath();
        ctx.drawImage(worldImage, 0, 0, canvas.width, canvas.height);
    };
}