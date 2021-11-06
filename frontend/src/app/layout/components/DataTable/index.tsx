import React from 'react';

/* Styles */
import './styles.css';

/* Selectors */
import { activeEntitySelector, isDataTableVisibleSelector, useAppSelector } from '../../../store/selectors/graph';

const DataTable: React.FC = () => {

    const activeEntity = useAppSelector(activeEntitySelector);

    const isDataTableVisible = useAppSelector(isDataTableVisibleSelector);

    return (

        <div className={`data-table table-responsive m-0 ${isDataTableVisible ? 'd-block' : 'd-none'}`}>
            
            <table className="table table-striped table-xs table-dark m-0 w-100">
                
                <thead>

                    <tr>
                        <th>Entidade</th>
                        <th>{ activeEntity?.label || 'LABEL' }</th>
                    </tr>

                    <tr>
                        <th>Atributo</th>
                        <th>Valor</th>
                    </tr>

                </thead>

                <tbody>

                    {Object.entries(activeEntity || {}).map(([ field, value ], id) =>

                        field !== "id" && field !== "label" 
                        && field !== "color" && field !== "game_id"
                        ?
                            <tr key={id}>
                                <td>{field}</td>
                                <td>{value}</td>
                            </tr>
                        : React.Fragment
                    )}
                
                </tbody>

            </table>

        </div>

    );
}

export default DataTable;
