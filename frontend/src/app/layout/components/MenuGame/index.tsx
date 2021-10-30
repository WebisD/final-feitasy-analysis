import React from 'react';

type Props = {
  setState: (state: string) => void;
}

function MenuGame ({ setState }:Props) {

  return (
    <div className="d-flex flex-column">
    <h1 className="display-1 d-flex justify-content-center">Final Feitasy</h1>
    <div className="d-flex justify-content-center">
    <button type="button" className="btn btn-success btn-lg"
            onClick={() => setState('select-character')}>
            Play Now</button>
    </div>
    </div>
  )
}

export default MenuGame;