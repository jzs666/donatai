import React, { Component } from 'react'
import {Link } from 'react-router'
import CartSummaryContainer from './Container/CartSummaryContainer'
// import MerchandiseList from './MerchandiseList/MerchandiseList';


class App extends Component {
  constructor(){
    super();
  }
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-md-12">
            <nav className="navbar navbar-inverse">
              <div className="container-fluid">
                <div className="navbar-header">
                  <Link className="navbar-brand" to="/products" activeStyle={{ color: 'red' }} >Home</Link>
                </div>
                <ul className="nav navbar-nav">
                  <li className="active"><Link to="/admin/products/new" activeStyle={{ color: 'red' }}>Admin</Link></li>
                </ul>
                <form className="navbar-form navbar-left" action="/action_page.php">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Username" />
                  </div>
                </form>
                <ul className="nav navbar-nav navbar-right">
                  <li><Link to="/cart-details"><CartSummaryContainer/></Link></li>
                </ul>
              </div>
            </nav>
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
export default App;
