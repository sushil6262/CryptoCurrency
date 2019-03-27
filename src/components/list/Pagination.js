import React from 'react';
import PropTypes from 'prop-types'
import './Pagination.css'

const Pagination = ({page,totalPages,handlePaginationClick}) => {
    return (
        <div className="Pagination">
            <button onClick={()=>handlePaginationClick('prev')} disabled={page<=1} className="Pagination-button">&larr;</button>
                <span className="Pagination-info">page <b>{page}</b> of <b>{totalPages}</b></span>
            <button onClick={()=>handlePaginationClick('next')} disabled={page>=totalPages} className="Pagination-button">&rarr;</button>
        </div>
    );
};
Pagination.protoTypes={
    totalPages: PropTypes.number.isRequired,
    page:PropTypes.number.isRequired,
    handlePaginationClick: PropTypes.func.isRequired
}

export default Pagination;