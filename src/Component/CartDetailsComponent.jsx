import React, { Component } from 'react'
import PropTypes from 'prop-types'
import image from './samsung.jpg'

class CartDetailsComponent extends Component {
    render() {
        var itemsHtml = this.props.items.map(function (item, index) {
            return (
                <tr key={index}>
                    <td><img className="media-object" src={image} style={{ width: '50px' }} /></td>
                    <td>{item.title}</td>
                    <td><button className="btn btn-danger" onClick={self.props.onItemRemove(item)}>Remove from cart</button></td>
                </tr>
            );
        });
        return (
            <div>
                <table className="table">
                    <tbody>
                        {itemsHtml}
                    </tbody>
                </table>
            </div>);
    }
}
CartDetailsComponent.propTypes = {
    items: PropTypes.array.isRequired,
    onItemRemove: PropTypes.func.isRequired
};


export default CartDetailsComponent;