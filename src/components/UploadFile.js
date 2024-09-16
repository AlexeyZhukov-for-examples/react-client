import React from 'react';
import { API_URL } from '../config/config';

const UploadFile = ({ setItems, setCurrentPage, loadItems }) => {
    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = async (e) => {
            try {
                const jsonData = JSON.parse(e.target.result);
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(jsonData)
                });

                if (response.ok) {
                    setCurrentPage(1);
                    await loadItems(1);
                } else {
                    throw new Error('Error uploading file');
                }
            } catch (err) {
                alert(err.message);
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