import React from 'react';
import { useReadCypher } from 'use-neo4j';

const reRenderTime = 1000;

interface IState {
    query: string;    
};

export default class GraphViewer extends React.Component {

    state: IState = {
        query:  `MATCH (n) RETURN n`
    };

    componentDidMount(){
        setInterval(this.loadData, reRenderTime);
    };

    loadData = () => {

        const { records, error } = useReadCypher(this.state.query);

        let result;

        if (error)
            console.log(error);

        else {
            
            let registers = records!.map( (r, idx) => {
                console.log(`registro ${idx}`)
            });

            result = null; //colocar o resultado na viz aqui depois

        } 
    }

    render() {
        return(

            <div>

            </div>

        )
    };

};