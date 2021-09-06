import React, { useState } from 'react'
import GraphViewer from '../components/GraphViewer';

const Home: React.FC = () => {

    const [ activeTab, setActiveTab ] = useState<"AboutUs" | "ViewGraph">("ViewGraph");

    return (

        <div className="app-home">

            { activeTab === "ViewGraph" && <GraphViewer/> }

        </div>

    );
};

export default Home;