/* Classes */
import World from "../models/world/world";
import Player from "../models/player";
import Merchant from '../models/merchant';
import Princess from "../models/princess";
import Jail from "../models/jail";

/* Images */
import loadingImage from '../sprites/screens/loading.png';

/* Utils */
import { getCanvasRef } from "../utils/references";

let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;

export let world: World;
export let player: Player;
export let merchant: Merchant;
export let princess: Princess;
export let jail: Jail;

const initializeCanvas = () => {
    canvas = getCanvasRef().canvas;
    ctx = getCanvasRef().ctx;

    canvas.width = window.innerWidth;
    canvas.height = canvas.parentElement!.clientHeight;

    /* Creating nodes in Neo4j (loading)*/
    const loadingScreen = new Image();
    loadingScreen.src = loadingImage;

    loadingScreen.onload = () => 
        ctx.drawImage(loadingScreen, 0, 0, canvas.width, canvas.height)
}

const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    world.draw();
    merchant.draw();
    princess.draw();
    jail.draw();
    player.draw();

    if (!!world.enemies) {
        world.enemies.forEach(enemy => enemy.update());
        jail.checkEnemyCollision();
    }
}

const render = () => {
    if (jail.hasDisappeared)
        world.drawWinScreen();
    
    else if (jail.isDestroyed)
        world.drawLostScreen();

    else if (!!player && !player.pausedGame)
        draw();

    window.requestAnimationFrame(render);
} 

export const run = async (
    playerBreed: string, 
    nickname: string, 
) => {
    initializeCanvas();

    world = new World();
    jail = new Jail();
    
    player = new Player(playerBreed, nickname);
    await player.createPlayer();

    merchant = new Merchant();
    await merchant.createMerchant();

    princess = new Princess();
    await princess.createPrincess();

    render();
}
