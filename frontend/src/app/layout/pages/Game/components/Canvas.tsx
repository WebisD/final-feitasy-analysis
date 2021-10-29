import React, { useRef, useEffect } from 'react';
import { run } from '../features';
import { setCanvasRef } from '../utils/references';

const Canvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    
    useEffect(() => {
      const canvas = canvasRef.current!;

      setCanvasRef({
        canvas,
        ctx: canvas.getContext('2d')!
      });
      
      run();
      
    }, [])
    
    return <canvas ref={canvasRef}/>
  }
  
  export default Canvas;