import React from 'react';
import './Product.css';

export default function Product(props) {
    return (
        <div className="product">
            <div className="product-image" style={{backgroundImage: `url(${props.product.image})`}}></div>
            <h3>{props.product.title}</h3>
            <div className="desc">{props.product.description}</div>
            <div id='business-name'>{props.product.businessId}</div>
            <div className="pricing" style={{margin: '5px auto'}}>
                <span>${props.product.price}</span>  <em>${props.product.discount}</em>
            </div>
        </div>
    )
}