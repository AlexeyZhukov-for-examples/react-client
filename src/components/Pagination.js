import React from 'react';

const Pagination = ({ currentPage, onLoadItems }) => {
    return (
        <div className="mt-3">
            <button 
                className="btn btn-outline-primary" 
                onClick={() => onLoadItems(currentPage - 1)} 
                disabled={currentPage === 1}
            >
                Previous
            </button>
            <span> Page: {currentPage} </span>
            <button 
                className="btn btn-outline-primary" 
                onClick={() => onLoadItems(currentPage + 1)}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;