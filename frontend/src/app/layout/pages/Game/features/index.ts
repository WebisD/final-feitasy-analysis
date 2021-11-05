import World from "../models/world/world";
import Player from "../models/player";
import Merchant from '../models/merchant';
import Princess from "../models/princess";
import Jail from "../models/jail";

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

    canvas.width = window.innerWidth;
    canvas.height = canvas.parentElement!.clientHeight;

    // Set 2D context
    ctx = getCanvasRef().ctx;
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
    if (princess.dead){
        // 
    }

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
    
    player = new Player(playerBreed, nickname);
    await player.createPlayer();

    merchant = new Merchant();
    await merchant.createMerchant();
    
    jail = new Jail();

    princess = new Princess();
    await princess.createPrincess();


    //Neo4j
    //createPlayer(playerBreed, nickname);

    render();
}
