import IDrawable from "../../common/IDrawable";
import { getCanvasRef } from "../../utils/references";


var worldImage = new Image();
worldImage.src = "https://cdn.conceptartempire.com/images/05/5265/00-lighter-featured-game-art-world-pixelart.jpg";

export default class World implements IDrawable {
    public leftLimit:number = -6;
    public rightLimit:number = (110 * 11)+8;
    public topLimit:number = -6 + 32;
    public bottomLimit:number = 50*7;

    draw() {
        const { canvas, ctx } = getCanvasRef();

        ctx.beginPath();
        ctx.drawImage(worldImage, 0, 0, canvas.width, canvas.height);   
        console.log(canvas.width);
        console.log(canvas.height);
        
        
    };
}