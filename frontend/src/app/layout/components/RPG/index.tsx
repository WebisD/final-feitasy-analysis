import React from 'react'
import Canvas from './Canvas'
import World from './World/World'

const RPG: React.FC = () => {
    const world: World = new World()
    
    const draw = (ctx: CanvasRenderingContext2D, frameCount: number) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        world.draw(frameCount)
    }

    return <Canvas draw={draw}/>;
};

export default RPG;