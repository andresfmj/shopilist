import React from 'react';

const searchbar = (props) => {
    
    return (
        <div>
            <p>
                <input type='text' value={props.searchValue} placeholder='Search an item...' onChange={props.onFilterText} />
                </p>
            <p>
                <label>
                    <input type='checkbox' checked={props.stocked} onChange={props.onStockFilter} /> Only show products in stock
                </label>
            </p>
        </div>
    )
}

export default searchbar;