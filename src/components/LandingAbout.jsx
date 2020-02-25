import React from "react";
import { HashLink as HLink } from 'react-router-hash-link';
import "./LandingAbout.css";
import img from "../images/down-arrow.png";

export default function LandingAbout(props){
    return (
        <div style={{marginBottom: -45}}>
            <div id="about" className="inner-container">
            <h1>About Us</h1>
            <p>We provide a platform for people of color in Los Angeles that are in the fashion industry to flourish and gain traffic to their designs. Users are able to access deals exclusively through our site.</p>
            </div>
            <HLink className="arrow" to="#deals"><img className="nav-arrow" src={img} /></HLink>
        </div>
    )
}