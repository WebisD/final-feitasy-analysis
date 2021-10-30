import React, { useRef, useEffect } from 'react';
import { run } from '../../features';
import { setCanvasRef } from '../../utils/references';

interface IProps {
  nickname: string;
  selectedCharacter: string;
}

const Canvas: React.FC<IProps> = ({ selectedCharacter, nickname }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    
    useEffect(() => {
      const canvas = canvasRef.current!;

      setCanvasRef({
        canvas,
        ctx: canvas.getContext('2d')!
      });

      if (selectedCharacter && nickname)
        run(selectedCharacter, nickname);
      
    }, [selectedCharacter, nickname])
    
    return <canvas ref={canvasRef}/>
  }
  
  export default Canvas;