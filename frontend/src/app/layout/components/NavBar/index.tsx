import React from 'react';

/* Modules */
import { ChakraProvider } from '@chakra-ui/react';
import { Switch } from '@chakra-ui/switch';

/* Images */
import ImgDS from '../../../assets/img/icon.svg';
import ImgDsTitle from '../../../assets/img/title.svg';
import WasdKeys from '../../../assets/img/keys_wasd.png';
import EnterKey from '../../../assets/img/keys_enter.png';

/* Selectors | Actions*/
import { setDataTableVisible, setIsPlaying } from '../../../store/dispatches';
import { isDataTableVisibleSelector, isPlayingSelector, useAppSelector } from '../../../store/selectors/graph';

const NavBar: React.FC = () => {

  const isDataTableVisible = useAppSelector(isDataTableVisibleSelector);

  const isPlaying = useAppSelector(isPlayingSelector);

  return (

    <ChakraProvider>

      <div className="d-flex flex-column bg-dark border-bottom shadow-sm p-2">
        
        <div className="container">

          <nav className="d-flex align-items-center justify-content-between">

            <span className="navbar-game-ico d-flex">
              <img src={ImgDS} alt="Final Feitasy" width="50" />
              <img src={ImgDsTitle} alt="Titulo" width="50" />
            </span>

            {isPlaying && <span className="navbar-game-keys d-flex text-light " style={{gap: '30px'}}>
              <span className="d-flex align-items-center"><img src={WasdKeys} alt="Move keys" width="90"/> Mover</span>
              <span className="d-flex align-items-center"><img src={EnterKey} alt="Communicate key" width="120" /> Comunicar</span>
            </span>}

            <span 
              className="btn btn-primary play-game-btn" 
              onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? "Dashboard" : "Jogar"}
            </span>

            {!isPlaying && <span className="navbar-data-table-togglerd-flex align-items-center" >
                <label htmlFor="showData" className="text-light p-1">Exibir dados </label>
                <Switch 
                  id="showData" 
                  isChecked={isDataTableVisible}
                  onChange={() => setDataTableVisible(!isDataTableVisible)} 
                />
            </span>}
            
          </nav>

        </div>

      </div>

    </ChakraProvider>
  );
}

export default NavBar;