import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ProductCardComponent extends Component
{
    render(){
        var style = {
            thumbnail: {
                maxWidth: '242px',
                textAlign: 'center',
                marginLeft: 'auto',
                marginRight: 'auto'
              },
            caption: {
                  color: 'black'
              }
        };
        return(
            <div style={style.thumbnail}>
                <img src={this.props.image} alt={this.props.title} style={this.props.style}/>
                <div className="caption" style={style.caption}>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.description}</p>
                    <p>{this.props.price} Eur</p>
                    <button className="btn btn-primary" role="button">Details</button>
                </div>
            </div>
        );
    }

}

    
ProductCardComponent.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    };

export default ProductCardComponent;