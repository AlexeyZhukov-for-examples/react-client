import React from 'react';
import { uploadFile } from '../api/api';

const UploadFile = ({ setCurrentPage, loadItems }) => {
    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = async (e) => {
            try {
                const jsonData = JSON.parse(e.target.result);
                await uploadFile(jsonData);
                setCurrentPage(1);
                await loadItems(1);
            } catch (err) {
                console.error(err.message);
            }
        };

        reader.readAsText(file);
    };

    return (
        <div className="form-group">
            <label htmlFor="fileUpload">Upload File:</label>
            <input type="file" className="form-control" id="fileUpload" onChange={handleFileUpload} />
        </div>
    );
};

export default UploadFile;