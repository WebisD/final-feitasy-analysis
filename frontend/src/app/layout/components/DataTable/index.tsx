import { useEffect, useState } from "react";

const DataTable = () => {

    return (
        <>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Personagem</th>
                            <th>Classe</th>
                            <th>Item</th>
                            <th>Inventário</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default DataTable;