import IDrawable from "../../common/IDrawable";
import { getCanvasRef } from "../../utils/references";


var worldImage = new Image();
worldImage.src = "https://cdn.conceptartempire.com/images/05/5265/00-lighter-featured-game-art-world-pixelart.jpg";

export default class World implements IDrawable {
    public leftLimit:number = -500;
    public rightLimit:number = (110 * 11)+8;
    public topLimit:number = -6 + 32;
    public bottomLimit:number = 50*7;

    draw() {
        const { canvas, ctx } = getCanvasRef();

        this.leftLimit = 0
        this.topLimit = 0 + 30
        this.bottomLimit = canvas.height - (canvas.height*0.1)
        this.rightLimit = canvas.width - 65

        ctx.beginPath();
        ctx.drawImage(worldImage, 0, 0, canvas.width, canvas.height);
    };
}