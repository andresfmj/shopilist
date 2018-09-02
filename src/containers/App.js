import React, { Component } from 'react';
import './App.css';

import SearchBar from '../components/SearchBar/SearchBar';
import ProductTable from '../components/ProductTable/ProductTable';


class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchText: '',
            inStocked: false
        }

        this.products = [
            {category: 'Deportes', price: '$29.99', stocked: true, name: 'Football'},
            {category: 'Deportes', price: '$17.99', stocked: true, name: 'Baseball'},
            {category: 'Deportes', price: '$23.99', stocked: false, name: 'Basketball'},
            {category: 'Electronicos', price: '$78.99', stocked: true, name: 'iPod Touch'},
            {category: 'Electronicos', price: '$399.90', stocked: false, name: 'iPhone 6S'}
        ]

        this.handleFilterText = this.handleFilterText.bind(this)
        this.handleStockFilter = this.handleStockFilter.bind(this)
    }

    handleFilterText(e) {
        this.setState({ searchText: e.target.value })
    }

    handleStockFilter(e) {
        this.setState(prevState => ({ inStocked: !prevState.inStocked }))
    }


    render() {
        return (
            <div className="App">
                <h1>Shopilist</h1>
                <SearchBar searchValue={this.state.searchText} stocked={this.state.inStocked} 
                    onFilterText={this.handleFilterText} onStockFilter={this.handleStockFilter} />
                <ProductTable products={this.products} searchValue={this.state.searchText} inStockOnly={this.state.inStocked} />
            </div>
        );
    }
}

export default App;
