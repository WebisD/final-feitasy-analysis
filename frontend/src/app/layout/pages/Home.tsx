import React, { useState } from 'react'

/* Components */
import VizGraph from '../components/VizGraph';
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

/* Styles */
import './Home.css';
import DataTable from '../components/DataTable';

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