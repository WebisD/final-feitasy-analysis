import React from 'react'

/* Components */
import VizGraph from '../components/VizGraph';
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import DataTable from '../components/DataTable';

/* Styles */
import './Home.css';

const Home: React.FC = () => {

    return (
        <>
            <NavBar/>

            <div className="main-content-container">
                <VizGraph/>
                <DataTable/>
            </div>

            <Footer />
        </>
    );
};

export default Home;
