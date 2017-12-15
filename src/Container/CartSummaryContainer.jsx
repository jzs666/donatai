import React, { Component } from 'react';
import CartSummaryComponent from '../Component/CartSummaryComponent'
import PropTypes from 'prop-types'
import axios from 'axios'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import picture from './samsung.jpg';


class ProductListContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleDetailsClick = this.handleDetailsClick.bind(this);
    this.state = { products: [] };
  }

  componentDidMount() {
    axios.get('https://itpro2017.herokuapp.com/api/products').then((response) => {
      this.setState({ products: response.data });
    });
  }

  handleDetailsClick(productId) {
    return (() => {
      this.context.router.push('/products/' + productId, { id: productId });
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <CartSummaryComponent/>
          </div>
    )
  }
}

ProductListContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default ProductListContainer;