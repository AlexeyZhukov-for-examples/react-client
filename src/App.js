import React, { useState, useEffect, useCallback } from 'react';
import ItemTable from './components/ItemTable';
import Pagination from './components/Pagination';
import UploadFile from './components/UploadFile';
import { loadItems as fetchItems } from './api/api';

const App = () => {
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [filterCode, setFilterCode] = useState("");
    const [error, setError] = useState(null);

    const loadItems = useCallback(async (page) => {
        try {
            const data = await fetchItems(page, filterCode);
            setItems(data);
            setCurrentPage(page);
        } catch (err) {
            setError(err.message);
        }
    }, [filterCode]);

    const handleFilter = () => {
        loadItems(1);
    };

    useEffect(() => {
        loadItems(1);
    }, [loadItems]);

    return (
        <div>
            <h1>Items</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            <UploadFile setItems={setItems} setCurrentPage={setCurrentPage} loadItems={loadItems} />
            <div className="form-group">
                <label htmlFor="filterCode">Filter by Code:</label>
                <input 
                    type="number" 
                    className="form-control" 
                    id="filterCode" 
                    value={filterCode} 
                    onChange={(e) => setFilterCode(e.target.value)} 
                />
                <button className="btn btn-secondary mt-2" onClick={handleFilter}>Filter</button>
            </div>
            <ItemTable items={items} />
            <Pagination currentPage={currentPage} onLoadItems={loadItems} />
        </div>
    );
};

export default App;