import React, { useState } from 'react'

/* Selectors */
import { isPlayingSelector, useAppSelector } from '../../../store/selectors/graph';
import MenuGame from '../../components/MenuGame';
import SelectCharacter from '../../components/SelectCharacter';

/* Components */
import Canvas from './components/Canvas';

/* Styles */
import './styles.css';

/* Assets */
import ImgWarrior from '../../../assets/img/warrior.svg';
import ImgWizard from '../../../assets/img/wizard.svg';

const Game: React.FC = () => {
    const isPlaying = useAppSelector(isPlayingSelector);

    const [selectedCharacter, setSelectCharacter] = useState<number | null>(null);
    
    return (
        <div className="game-wrapper" style={{display: isPlaying ? "block" : "none"}}>

            {selectedCharacter === null  ?
                <div className="d-flex select-character align-items-center justify-content-center">

                    <button type="button" className="btn btn-primary btn-lg"
                            onClick={() => setSelectCharacter(1)}
                            >
                        <img 
                            src={ImgWarrior}
                            alt="Warrior"
                            width="50"
                        />

                        <h5 className="card-title">Guerreiro</h5>

                    </button>

                    <button type="button" className="btn btn-secondary btn-lg"
                            onClick={() => setSelectCharacter(2)}
                            >
                        <img 
                            src={ImgWizard}
                            alt="Wizard"
                            width="50"
                        />
                        
                        <h5 className="card-title">Feiticeiro</h5>

                    </button>

                </div>

            : <Canvas selectedCharacter={selectedCharacter}/>
        }
        </div>
    )
}

export default Game;
