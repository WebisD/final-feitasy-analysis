import React from 'react'

/* Components */
import VizGraph from '../components/VizGraph';
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import DataTable from '../components/DataTable';
import RPG from '../components/RPG';

/* Styles */
import './Home.css';

const Home: React.FC = () => {

    return (
        <>
            <NavBar/>

            {/* <div className="main-content-container">
                <VizGraph/>
                <DataTable/>
            </div> */}

            <div className="main-game">
                <RPG/>
            </div>

            <Footer />
        </>
    );
};

export default Home;
