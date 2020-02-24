import React from 'react';
import Product from './Product';

import '../components/HScrollView.css';

export default function HProductScrollList(props) {
    return (
        <div className='hscroll-container'>
            <h1>Deals</h1>
            <div className='HScrollView'>
                {
                    props.listItems.map((item, idx) => {
                        return (
                            <div className="card">
                                <Product product={item} key={idx} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}