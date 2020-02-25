import React from 'react';
import './Business.css';

export default function Business(props) {
    return (
        <div>
            <div className='card'>
                <div className="business-image" style={{ backgroundImage: `url(${props.business.imageUrl})` }}></div>
                <h3>{props.business.name}</h3>
            </div>
        </div>
    )
}