import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const PRODUCTS_LIST = [
    {category: 'Deportes', price: '$29.99', stocked: true, name: 'Football'},
    {category: 'Deportes', price: '$17.99', stocked: true, name: 'Baseball'},
    {category: 'Deportes', price: '$23.99', stocked: false, name: 'Basketball'},
    {category: 'Electronicos', price: '$78.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronicos', price: '$399.90', stocked: false, name: 'iPhone 6S'}
]

ReactDOM.render(<App products={PRODUCTS_LIST} />, document.getElementById('root'));
registerServiceWorker();
