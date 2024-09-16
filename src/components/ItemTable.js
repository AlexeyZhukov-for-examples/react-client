import React from 'react';

const ItemTable = ({ items }) => {
    return (
        <table className="table table-bordered table-striped mt-4">
            <thead>
                <tr>
                    <th>Порядковый номер</th>
                    <th>Код</th>
                    <th>Значение</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.code}</td>
                        <td>{item.value}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ItemTable;