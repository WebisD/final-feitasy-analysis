import React from 'react';

/* Styles */
import './styles.css';

/* Selectors */
import { activeNodeSelector, isDataTableVisibleSelector, useAppSelector } from '../../../store/selectors/graph';

const DataTable: React.FC = () => {

    const activeNode = useAppSelector(activeNodeSelector);

    const isDataTableVisible = useAppSelector(isDataTableVisibleSelector);

    return (

        <div className={`data-table table-responsive m-0 ${isDataTableVisible ? 'd-block' : 'd-none'}`}>
            
            <table className="table table-striped table-xs table-dark m-0 w-100">
                
                <thead>

                    <tr>
                        <th>Entidade</th>
                        <th>{ activeNode?.label || 'LABEL' }</th>
                    </tr>

                    <tr>
                        <th>Atributo</th>
                        <th>Valor</th>
                    </tr>

                </thead>

                <tbody>

                    {Object.entries(activeNode || {}).map(([ field, value ], id) =>

                        field !== "id" && field !== "label" ?
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
