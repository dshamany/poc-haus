import React from 'react'
import { Link } from 'react-router-dom';
import Business from '../components/Business';
import '../components/HScrollView.css'

export default function HBusinessesScrollList(props) {
    return (
        <div className='hscroll-container'>
            <h1>POC Businesses</h1>
            <div className='HScrollView'>
                {
                    props.listItems.map((item, idx) => {
                        return (
                            <div className="card">
                                <Link to='/business'>
                                    <Business business={item} key={idx} />
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}