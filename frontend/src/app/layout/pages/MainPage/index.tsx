import React from 'react';

/* Components */
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import Dashboard from '../Dashboard';
import Game from '../Game';

const MainPage: React.FC = () =>
    <>
        <NavBar/>

            <Dashboard/>
            <Game />

        <Footer />
    </>

export default MainPage;