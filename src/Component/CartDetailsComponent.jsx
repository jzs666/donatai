import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProductCardComponent from './ProductCardComponent'


class CartDetailsComponent extends Component {
    render() {
        if (this.props.products.length !== 0) {
            var productCards = this.props.products.map((product, index) => {
                return (
                    <ProductCardComponent
                        key={index}
                        id={product.id}
                        image={"/samsung.jpg"}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        onDetailsClick={this.props.onDetailsClick} />
                );
            });
            return (<div className="row">{productCards}</div>);
        }
        else {
            return (<div> Laukiu duomenu </div>);
        }
    }

}

CartDetailsComponent.propTypes = {
    products: PropTypes.array.isRequired,
    onDetailsClick: PropTypes.func.isRequired,
};

export default CartDetailsComponent;