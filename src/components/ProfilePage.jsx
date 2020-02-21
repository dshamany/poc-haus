import React from 'react';
import Product from './Product';
import Review from './Review';
import './ProfilePage.css';

export default function ProfilePage(props) {
    return (
        <div className="container">
            <div className="header-container">
                <img src="./header-photo.png" alt="banner" className="header-image"/>
                <img src="./heart.png" alt="banner" className="heart-image"/>
                <div className="company-name">Tribec</div>
            </div>
            <div className="company">
                <div className="company-details">
                    <div className="detail-left">
                        <div className="company-about">About the Brand</div>
                        <div>
                            COMPANY ABOUT  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aliquid repellendus pariatur minima optio necessitatibus distinctio dolores nemo. Laboriosam, blanditiis possimus odio deleniti quae dolores tenetur fugiat quidem quibusdam id!
                        </div>
                    </div>
                    <div className="detail-right">
                        <h2>
                            <a href="" className="company-link">Visit Company Site</a>
                        </h2>
                        <h3>
                            <button className="btn-fav">&#10084;</button>
                            Add to Favorites
                        </h3>
                        <div><img src="https://picsum.photos/200" alt="stock"/></div>
                    </div>
                </div>
            </div>
            <div>
                <h2>Products</h2>
                <div className="product-list">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
            <div>
                <h2>Reviews</h2>
                <div className="review-list">
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                </div>
            </div>
        </div>
    )
} 