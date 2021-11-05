import World from "../models/world/world";
import Player from "../models/player";
import Merchant from '../models/merchant';
import Princess from "../models/princess";

import { getCanvasRef } from "../utils/references";
import { createCharacterAsync } from "../transactions/transactions";

let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;

export let world: World;
export let player: Player;
export let merchant: Merchant;
export let princess: Princess;

const createPlayer = async (playerBreed: string, nickname: string) => {
    const playerId = await createCharacterAsync(playerBreed, nickname);
    //character = new Character(playerId, true, playerBreed, nickname);
};

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
    player.draw();

    if (!!world.enemies) 
        world.enemies.forEach(enemy => enemy.update());
}

const render = () => {
    if (!!player && !player.pausedGame)
        draw();
        
    window.requestAnimationFrame(render);
} 

export const run = (playerBreed: string, nickname: string) => {
    initializeCanvas();

    world = new World();
    merchant = new Merchant("001");
    
    princess = new Princess("100");

    //Neo4j
    //createPlayer(playerBreed, nickname);
    player = new Player("007", playerBreed, nickname);

    render();
}
