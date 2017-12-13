var UserService = window.UserService;
var EventEmitter = window.EventEmitter;
import React, {Component} from 'react'



class CartDetailsContainer extends Component{

  constructor() {
   this.state = {items: []};
  }

  componentDidMount() {
    var self = this;
    axios.get('/api/users/' + UserService.getUsername() + '/cart-products').then(function(response) {
      self.setState({
        items: response.data
      });
    });
  }

  handleItemRemove(item) {
    var self = this;
    return function() {
      axios.delete('/api/users/' + UserService.getUsername() + '/cart-products/' + item.id).then(function(response) {
        self.setState({
          items: response.data
        });
        EventEmitter.publish({ eventType: 'RemoveFromCart' });
      });
    };
  }

  render() {
    return <CartDetailsComponent items={this.state.items} onItemRemove={this.handleItemRemove} />;
  }
}

export default CartDetailsContainer;
