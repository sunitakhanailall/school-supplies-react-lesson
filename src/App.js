import React, {Component} from 'react';
import './App.css';
import Hero from './Components/Hero.js';
import Product from './Components/Product.js';
import Summary from './Components/Summary.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cart:[],
        total: 0
    }
  }
  
  buy = (thing, price) => {
    this.setState((state) => {
        state.cart.push(thing)
        state.total += parseFloat(price)
        return state
    })
}
  
  render() {
    return (
      <div className="App">
        <Hero />
        <Product type="Laptop" price="1000" buy = {this.buy}/>
        <Product type="Mechanical Pencil" price="25" buy = {this.buy}/>
        <Product type="College Ruled Loose Leaf" price="50" buy = {this.buy} />
        <Product type="Eraser" price="100" buy = {this.buy} />
        <Summary globalState={this.state} />
      </div>
    );
  }
}

export default App;