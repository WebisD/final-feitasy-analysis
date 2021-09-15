import React from 'react';

/* Modules */
import { ChakraProvider } from '@chakra-ui/react';
import { Switch } from '@chakra-ui/switch';

/* Images */
import ImgDS from '../../../assets/img/icon.svg';
import ImgDsTitle from '../../../assets/img/title.svg';

/* Selectors | Actions*/
import { setDataTableVisible } from '../../../store/dispatches';
import { isDataTableVisibleSelector, useAppSelector } from '../../../store/selectors/graph';

const NavBar: React.FC = () => {

  const isDataTableVisible = useAppSelector(isDataTableVisibleSelector);

  return (

    <ChakraProvider>

      <div className="d-flex flex-column bg-dark border-bottom shadow-sm p-2">
        
        <div className="container">

          <nav className="d-flex align-items-center justify-content-between">

            <span className="navbar-game-ico d-flex">
              <img src={ImgDS} alt="Final Feitasy" width="50" />
              <img src={ImgDsTitle} alt="Titulo" width="50" />
            </span>

            <span className="navbar-data-table-togglerd-flex align-items-center" >
                <label htmlFor="showData" className="text-light p-1">Exibir dados </label>
                <Switch 
                  id="showData" 
                  isChecked={isDataTableVisible}
                  onChange={() => setDataTableVisible(!isDataTableVisible)} 
                />
            </span>
            
          </nav>

        </div>

      </div>

    </ChakraProvider>
  );
}

export default NavBar;