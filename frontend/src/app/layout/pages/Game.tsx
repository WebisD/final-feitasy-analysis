import React, { useState } from 'react'

/* Components */
import VizGraph from '../components/VizGraph';
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import DataTable from '../components/DataTable';

/* Styles */
import './Home.css';
import SelectCharacter from '../components/SelectCharacter';
import MenuGame from '../components/MenuGame';

const Home: React.FC = () => {

    const [state, setState] = useState('menu')
    const [selectCharacter, setSelectCharacter] = useState(1)


    return (
        <>
            <NavBar/>

            <div className="main-content-container">
            <div>
                {state === 'menu' && (
                    <MenuGame setState={setState} />
                )}

                {state === 'select-character' && <SelectCharacter selectCharacter={selectCharacter} setSelectCharacter={setSelectCharacter} />}
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Home;
