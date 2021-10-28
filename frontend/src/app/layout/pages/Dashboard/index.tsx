import React from 'react'

/* Components */
import VizGraph from '../../components/VizGraph';
import Footer from "../../components/Footer";
import DataTable from '../../components/DataTable';

/* Styles */
import './styles.css';

/* Selectors */
import { isPlayingSelector, useAppSelector } from '../../../store/selectors/graph';

const Dashboard: React.FC = () => {
    const isPlaying = useAppSelector(isPlayingSelector);

    return (
        <>
            <div className="main-content-container" style={{display: !isPlaying ? "block" : "none"}}>
                <VizGraph/>
                <DataTable/>
            </div>
        </>
    );
};

export default Dashboard;
