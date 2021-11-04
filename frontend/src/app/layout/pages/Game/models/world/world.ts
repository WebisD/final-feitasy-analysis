import IDrawable from "../../common/IDrawable";
import { getCanvasRef } from "../../utils/references";

const worldImage = new Image();
worldImage.src = "https://cdn.conceptartempire.com/images/05/5265/00-lighter-featured-game-art-world-pixelart.jpg";

export default class World implements IDrawable {
    public leftLimit:number;
    public topLimit:number;
    public rightLimit:number;
    public bottomLimit:number;

    public draw() {
        const { canvas, ctx } = getCanvasRef();

        // World limits
        this.leftLimit = 0;
        this.topLimit = 0;
        this.rightLimit = canvas.width;
        this.bottomLimit = canvas.height;

        ctx.beginPath();
        ctx.drawImage(worldImage, 0, 0, canvas.width, canvas.height);
    };
}