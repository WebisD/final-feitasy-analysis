import React, { useEffect, useState } from 'react'
import applyQueryableLive from '../../features/applyQueryableLive';
import GraphViewer from '../components/GraphViewer';


import VizGraph from '../components/GraphViewer/VizGraph'; // tirar depois (apenas teste)

const Home: React.FC = () => {

    useEffect(() => { applyQueryableLive() }, []);

    const [ activeTab, setActiveTab ] = useState<"AboutUs" | "ViewGraph">("ViewGraph");

    return (

        <div className="app-home">

            { activeTab === "ViewGraph" && <GraphViewer/> }

            { activeTab === "ViewGraph" && <VizGraph/> }

        </div>

    );
};

export default Home;