import React, {Component} from 'react';
import ProductListAdministrationComponent from '../Component/ProductListAdministrationComponent';
import PropTypes from 'prop-types'
import axios from 'axios'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


class ProductListAdministrationContainer extends Component{
    
     constructor(context) {
         super(context)
        return { products: [] };
      }
    
    //   componentDidMount() {
    //     var self = this;
    //     axios.get('/api/products').then(function (response) {
    //       self.setState({ products: response.data });
    //     });
    //   }
    
      render() {
        return (
            <ProductListAdministrationComponent
              products={this.state.products}
            />
        );
      }
    }
    
    ProductListAdministrationComponent.contextTypes = {
      router: PropTypes.object.isRequired,
    };
    
export default ProductListAdministrationContainer;