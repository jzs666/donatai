import React, { Component } from 'react'
import ProductAdministrationComponent from '../Component/ProductAdministrationComponent'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class ProductAdministrationContainer extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            product:
                {
                    title: '',
                    imageURL: '',
                    description: '',
                    quantity: '',
                    price: ''
                }
        }
    }
    handleSubmit(event) {
        event.preventDefault();
        for (var x in this.state)
            console.log(this.state[x]);
    }
    handleChange(fieldName) {
        return (e) => {
            var product = self.state.product;
            product[fieldName] = e.target.value;
            this.setState({ product: product });
        };
    }

    render() {
        var props = { handleChange: this.handleChange, handleSubmit: this.handleSubmit, product: this.state.product };
        return (
            <div>
                <ProductAdministrationComponent  {...props} />
            </div>
        );
    }

}

export default ProductAdministrationContainer;