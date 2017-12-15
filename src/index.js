import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import ProductListContainer from './Container/ProductListContainer'
import Product from './Container/ProductAdministrationContainer'
import ProductDetailsContainer from './Container/ProductDetailsContainer'
import CartDetailsContainer from './Container/CartDetailsContainer'
import CartSummaryContainer from './Container/CartSummaryContainer'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'



var NoMatch = (props) => {
  return <div>Route did not match</div>;
};


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={ProductListContainer} />
      <Route path="/products" component={ProductListContainer} />
      <Route path="/admin/products/new" component={Product} />
      <Route path="/products/:id" component={ProductDetailsContainer} />
      <Route path="/cart-details" component={CartDetailsContainer}/>
      {/* <Route path="/cart-details" component={CartDetailsContainer}/> */}
      {/* <Route path="/help" component={DemonstruotiNavigacija} /> */}
      <Route path="*" component={NoMatch} />
    </Route>

  </Router>,
  document.getElementById('root')
);
