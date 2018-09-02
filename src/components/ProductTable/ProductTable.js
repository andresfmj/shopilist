import React from 'react';

import ProductCategoryRow from './ProductCategoryRow/ProductCategoryRow';
import ProductRow from './ProductRow/ProductRow';


const productTable = (props) => {
    const rows = []
    let lastCategory = null
    let filterText = props.searchValue.toLowerCase()

    props.products.forEach(product => {
        if (product.name.toLowerCase().indexOf(filterText) === -1) {
            return;
        }

        if (props.inStockOnly && !product.stocked) {
            return;
        }

        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow 
                    categoryTitle={product.category} 
                    key={product.category} />
            )
        }
        rows.push(
            <ProductRow 
                product={product} 
                key={product.name} />
        )
        lastCategory = product.category
    })



    return (
        <table style={{ textAlign: 'left', width: '90%', margin: '4px auto' }}>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

export default productTable;