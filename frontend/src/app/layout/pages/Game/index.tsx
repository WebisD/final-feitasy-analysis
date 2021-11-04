import React, { useState } from 'react'

/* Selectors */
import { isPlayingSelector, useAppSelector } from '../../../store/selectors/graph';

/* Components */
import Canvas from './components/Canvas';

/* Styles */
import './styles.css';

/* Assets */
import ImgWarrior from '../../../assets/img/warrior.svg';
import ImgWizard from '../../../assets/img/wizard.svg';
import ImgArcher from '../../../assets/img/archer.svg';

const Game: React.FC = () => {
    const isPlaying = useAppSelector(isPlayingSelector);

    const [selectedCharacter, setSelectCharacter] = useState<string | null>(null);

    const [playerName, setPlayerName] = useState<string>('');

    const [isCreated, setIsCreated] = useState(false);
    
    return (
        <div className="game-wrapper" style={{display: isPlaying ? "block" : "none"}}>

            {!isCreated  ?
                <div className="d-flex select-character flex-column align-items-center justify-content-center">
                    
                    <div className="player-name-field form-group">
                        <label htmlFor="nickname">Nickname:</label>
                        <input 
                            type="text" 
                            name="nickname" 
                            className="form-control" 
                            placeholder="Digite o seu nickname"
                            value={playerName!}
                            onChange={e => setPlayerName(e.target.value.trim())}    
                        />
                    </div>

                    <div className="d-flex player-cards">
                        <button 
                            type="button" 
                            className="btn btn-primary btn-lg"
                            onClick={() => setSelectCharacter("Guerreiro")}
                            style={{opacity: selectedCharacter !== "Guerreiro" ? 0.6 : 1}}
                        >
                            <img 
                                src={ImgWarrior}
                                alt="Warrior"
                                width="50"
                            />
                            <h5 className="card-title">Guerreiro</h5>

                        </button>

                        <button 
                            type="button" 
                            className="btn btn-warning btn-lg"
                            onClick={() => setSelectCharacter("Arqueiro")}
                            style={{opacity: selectedCharacter !== "Arqueiro" ? 0.6 : 1}}
                        >
                            <img 
                                src={ImgArcher}
                                alt="Archer"
                                width="50"
                            />
                            <h5 className="card-title">Arqueiro</h5>

                        </button>

                        <button 
                            type="button" 
                            className="btn btn-secondary btn-lg"
                            onClick={() => setSelectCharacter("Feiticeiro")}
                            style={{opacity: selectedCharacter !== "Feiticeiro" ? 0.6 : 1}}
                        >
                            <img 
                                src={ImgWizard}
                                alt="Wizard"
                                width="50"
                            />
                            <h5 className="card-title">Feiticeiro</h5>

                        </button>
                    </div>

                    <button 
                        className="btn btn-success btn-play"
                        onClick={() => setIsCreated(true)}
                        disabled={!selectedCharacter || !playerName}
                    >
                        Play!
                    </button>

                </div>

            : <Canvas selectedCharacter={selectedCharacter!} nickname={playerName!}/>
        }
        </div>
    )
}

export default Game;
