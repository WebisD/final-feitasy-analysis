import React, { useRef, useEffect } from 'react';
import { run } from '../../features';
import { getCanvasRef, setCanvasRef } from '../../utils/references';
import { isPlayingSelector, useAppSelector } from '../../../../../store/selectors/graph';


interface IProps {
  nickname: string;
  selectedCharacter: string;
}

const Canvas: React.FC<IProps> = ({ selectedCharacter, nickname }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const isPlaying = useAppSelector(isPlayingSelector);

    useEffect(() => {
      const canvas = canvasRef.current!;

      setCanvasRef({
        canvas,
        ctx: canvas.getContext('2d')!
      });

      if (selectedCharacter && nickname)
        run(selectedCharacter, nickname);

    }, [selectedCharacter, nickname])

    useEffect(() => {
      const canvas = getCanvasRef().canvas; 
      if (isPlaying)
        canvas!.width = window.innerWidth;
        canvas!.height = canvas.parentElement!.clientHeight;

    }, [isPlaying])

    return <canvas ref={canvasRef}/>
  }

  export default Canvas;