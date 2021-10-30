import React from 'react';

import ImgWarrior from '../../../assets/img/warrior.svg';
import ImgWizard from '../../../assets/img/wizard.svg';

type Props = {
  selectCharacter: number;
  setSelectCharacter: (state: number) => void;
  setState: (state: string) => void;
}


function SelectCharacter ( {selectCharacter, setSelectCharacter, setState }: Props ) {

  return (
    <>
    <div className="d-flex flex-column">
    <div className="d-flex justify-content-center">
    <button type="button" className="btn btn-primary btn-lg"
            onClick={() => setSelectCharacter(1)}
            >
      <img 
        src={ImgWarrior}
        alt="Warrior"
        width="50"
      />
      <div className="card-body">
      <h5 className="card-title">Guerreiro</h5>
      </div>    
    </button>

    <button type="button" className="btn btn-secondary btn-lg"
            onClick={() => setSelectCharacter(2)}
            >
      <img 
        src={ImgWizard}
        alt="Wizard"
        width="50"
      />
      <div className="card-body">
      <h5 className="card-title">Feiticeiro</h5>
      </div>    
    </button>
    </div>
    <div className="d-flex justify-content-center">
    <button type="button" className="btn btn-success btn-lg" onClick={() => setState('canvas')}>Play Now</button>
    </div>
    </div>
    </>
  )
}

export default SelectCharacter;