import React from "react";
import { HashLink as HLink } from 'react-router-hash-link';
import "./LandingMain.css";
import img from "../images/down-arrow.png"

export default function LandingMain(props) {
    return (
        <div style={{marginBottom: -45}}>
            <div id="landing">
                <div>
                    <p>Explore, Shop, and Support POC-owned businesses in LA</p>
                </div>
            </div>
            <HLink className="arrow" to="#about"><img className="nav-arrow" src={img} /></HLink>
        </div>
    )
}