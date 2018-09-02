import React from 'react';

const productCategoryRow = (props) => {
    return (
        <tr style={{ textAlign: 'center' }}>
            <th colSpan='2'>
                {props.categoryTitle}
            </th>
        </tr>
    )
}

export default productCategoryRow;