import React from 'react'

/* Selectors */
import { isPlayingSelector, useAppSelector } from '../../../store/selectors/graph';

/* Components */
import Canvas from './components/Canvas';

/* Styles */
import './styles.css';

const Game: React.FC = () => {
    const isPlaying = useAppSelector(isPlayingSelector);
    
    return (
        <div className="game-wrapper" style={{display: isPlaying ? "block" : "none"}}>
            <Canvas/>
        </div>
    )
}

export default Game;
