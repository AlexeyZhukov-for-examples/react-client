import { API_URL, PAGE_SIZE } from '../config/config';

export const uploadFile = async (data) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error('Error uploading file');
    }
    
    return response;
};

export const loadItems = async (page, filterCode) => {
    const response = await fetch(`${API_URL}?page=${page}&pageSize=${PAGE_SIZE}${filterCode ? `&code=${filterCode}` : ''}`);
    
    if (!response.ok) {
        throw new Error('Error loading items');
    }

    return await response.json();
};