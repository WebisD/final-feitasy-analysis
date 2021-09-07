import React, { useState } from 'react'

/* Components */
import VizGraph from '../components/VizGraph';

/* Styles */
import './Home.css';

const Home: React.FC = () => {

    const [ activeTab, setActiveTab ] = useState<"AboutUs" | "ViewGraph">("ViewGraph");

    return (

        <div className="app-home">

            { activeTab === "ViewGraph" && <VizGraph/> }

        </div>

    );
};

export default Home;