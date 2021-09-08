import React, { useState } from 'react'

/* Components */
import VizGraph from '../components/VizGraph';
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

/* Styles */
import './Home.css';

const Home: React.FC = () => {

    const [ activeTab, setActiveTab ] = useState<"AboutUs" | "ViewGraph">("ViewGraph");

    return (
        <>
            <NavBar/>
            <div>
                { activeTab === "ViewGraph" && <VizGraph/> }
             </div>
            <Footer />
        </>
    );
};

export default Home;