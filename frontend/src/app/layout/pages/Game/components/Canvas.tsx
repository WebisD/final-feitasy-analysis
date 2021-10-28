import React, { useRef, useEffect } from 'react';
import { run, unmountCanvas } from '../features';
import { setCanvasRef } from '../utils/references';

const Canvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    
    useEffect(() => {

      setCanvasRef({
        canvasReference: canvasRef.current!,
        animationFrameId: 0
      });
      
      run();
      
    }, [])
    
    return <canvas ref={canvasRef}/>
  }
  
  export default Canvas;