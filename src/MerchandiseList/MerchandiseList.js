import React, {Component} from 'react';


class MerchandiseList extends Component{
    render(){
        return(
            <div>
                {this.props.products.filter((p)=>p.price > this.props.limit)
                                    .map(function (p){return {title: p.title, quantity: p.quantity, price: p.price}})
                                    .reduce((sum,pupil)=>sum+pupil.price*pupil.quantity, 0)}
                </div>
        );
    
    }
}

export default MerchandiseList;