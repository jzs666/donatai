import React, {Component} from 'react';
import ProductCardComponent from '../ProductCardComponent/ProductCardComponent';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import picture from '../samsung.jpg';

class ProductListComponent extends Component
{
    render(){
        var style = {
              image: { width: '100%',
                       height: '200px',
                       display: 'block'}
        };
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <ProductCardComponent image={picture} name="alt-name" style={style.image} title="samsung" description="nice" price={10} />
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <ProductCardComponent image={picture} name="alt-name" style={style.image} title="samsung" description="nice" price={10}  />
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <ProductCardComponent image={picture} name="alt-name" style={style.image} title="samsung" description="nice" price={10}  />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <ProductCardComponent image={picture} name="alt-name" style={style.image} title="samsung" description="nice" price={10} />
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <ProductCardComponent image={picture} name="alt-name" style={style.image} title="samsung" description="nice" price={10}  />
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <ProductCardComponent image={picture} name="alt-name" style={style.image} title="samsung" description="nice" price={10}  />
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductListComponent;