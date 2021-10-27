import React, { useRef, useEffect } from 'react'
import {setCanvasRef} from './References'

interface IProps {
    draw: (ctx: CanvasRenderingContext2D, frameCount: number) => void;
}

const Canvas: React.FC<IProps> = props => {
  
    const { draw } = props
    const canvasRef = useRef<HTMLCanvasElement>(null)
    
    useEffect(() => {
      
      const canvas = canvasRef.current

      setCanvasRef(canvas!);
      
      canvas!.width = window.innerWidth
      canvas!.height = window.innerHeight
      
      const context = canvas!.getContext('2d')
      let frameCount = 0
      let animationFrameId: number;
      
      const render = () => {
        frameCount++
        draw(context!, frameCount)
        animationFrameId = window.requestAnimationFrame(render)
      } 
      render()
      
      return () => {
        window.cancelAnimationFrame(animationFrameId)
      }
    }, [draw])
    
    return <canvas ref={canvasRef}/>
  }
  
  export default Canvas