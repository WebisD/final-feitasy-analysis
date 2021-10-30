import React, { useState } from 'react'

/* Selectors */
import { isPlayingSelector, useAppSelector } from '../../../store/selectors/graph';
import MenuGame from '../../components/MenuGame';
import SelectCharacter from '../../components/SelectCharacter';

/* Components */
import Canvas from './components/Canvas';

/* Styles */
import './styles.css';

const Game: React.FC = () => {
    const isPlaying = useAppSelector(isPlayingSelector);
    const [state, setState] = useState('menu')
    const [selectCharacter, setSelectCharacter] = useState(1)
    
    return (
        <div className="game-wrapper" style={{display: isPlaying ? "block" : "none"}}>
            <div className="main-content-container">
            <div>
                {state === 'menu' && (
                    <MenuGame setState={setState} />
                )}

                {state === 'select-character' && <SelectCharacter selectCharacter={selectCharacter} setSelectCharacter={setSelectCharacter} 
                    setState={setState}/>
                }
                {state === 'canvas' && <Canvas characterType={selectCharacter}/>}
                </div>
            </div>
        </div>
    )
}

export default Game;
