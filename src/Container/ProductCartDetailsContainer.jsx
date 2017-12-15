import React, { Component } from 'react'
import axios from 'axios'
import CartDetailsComponent from '../Component/CartDetailsComponent'

class CartDetailsContainer extends Component {

  constructor() {
    super();
    this.state = { items: [] };
  }

  componentDidMount() {
    // axios.get('/api/users/' + UserService.getUsername() + '/cart-products').then((response) => {
    //   return this.setState({ items: response.data });
    // });
  }

  handleItemRemove(item) {
    // return function () {
    //   axios.delete('/api/users/' + UserService.getUsername() + '/cart-products/' + item.id).then((response) => {
    //     this.setState({ items: response.data });
    //     EventEmitter.publish({ eventType: 'RemoveFromCart' });
    //   });
    // };
  }

  render() {
    return <CartDetailsComponent items={this.state.items} onItemRemove={this.handleItemRemove} />;
  }
}

export default CartDetailsContainer;
