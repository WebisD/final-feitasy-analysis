import React from 'react';

/* Selectors */
import { activeNodeSelector, useAppSelector } from '../../../store/selectors/graph';

const DataTable: React.FC = () => {

    const activeNode = useAppSelector(activeNodeSelector);

    return (

        <div className="table-responsive">
            
            <table className="table table-striped table-xs table-dark" style={{width: '100%'}}>
                
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

                    {Object.entries(activeNode || []).map(([ field, value ], id) =>
                        <tr key={id}>
                            <td>{field}</td>
                            <td>{value}</td>
                        </tr>
                    )}
                
                </tbody>

            </table>

        </div>

    );
}

export default DataTable;
