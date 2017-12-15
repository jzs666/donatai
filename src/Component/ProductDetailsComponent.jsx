import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import image from './samsung.jpg'

const ProductDetailsComponent=(props)=> {   
        return(
            <div>
                <div className="media">
                    <div className="media-left">
                        <img className="media-object" src={image} alt="..."/>
                    </div>
                    <div className="media-body">
                        <h4 className="media-heading">{props.product.title}</h4>
                        <p>{props.product.description}</p>
                        <p>{props.product.isInStock}</p>
                        <p>Price: {props.product.price} Eur</p>
                    </div>
                </div>
                <div className="help-text">
                    <div style={{ paddingTop: '10px' }}>
                        <button style={{ marginRight: '10px' }} className="btn btn-success" onClick={props.onAddToCart}>To cart</button>
                        <button style={{ marginRight: '10px' }} className="btn btn-default" onClick={props.onBack}>Back</button>
                    </div> 
                </div> 
            </div>      
        );
    }    


export default ProductDetailsComponent;