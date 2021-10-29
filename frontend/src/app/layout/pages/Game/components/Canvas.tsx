import React, { useRef, useEffect } from 'react';
import { run } from '../features';
import { setCanvasRef } from '../utils/references';

const Canvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    
    useEffect(() => {

      setCanvasRef(canvasRef.current!);
      
      run();
      
    }, [])
    
    return <canvas ref={canvasRef}/>
  }
  
  export default Canvas;