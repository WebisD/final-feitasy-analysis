import React, { useRef, useEffect } from 'react';
import { run } from '../features';
import { setCanvasRef } from '../utils/references';

type Props = {
  characterType: number;
}

const Canvas: React.FC<Props> = ({characterType}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    
    useEffect(() => {
      alert(characterType)
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