import React from "react";
import './Indicator.css'
import healthy from "./icons/healthy.svg"
import love from "./icons/love.svg"
import diet from "./icons/diet.svg"
import allergy from "./icons/allergy.svg"
import thumb from "./icons/thumb.svg"

function Indicator(props) {
    return (
        <div className="container-indicator">
            <div className="container-lines">
                <div className="line upper-line"></div>
                <div className="line upper-line"></div>
            </div>

            <div className="container-img">
                <div className="bloc-img">
                    <img src={healthy} alt="healthy"/>
                </div>
                <div className="bloc-img">
                    <img src={love} alt="love"/>
                </div>
                <div className="bloc-img">
                    <img src={allergy} alt="diet"/>
                </div>
                <div className="bloc-img">
                    <img src={diet} alt="allergy"/>
                </div>
                <div className="bloc-img">
                    <img src={thumb} alt="thumb"/>
                </div>
            </div>

        </div>
    )
}

export default Indicator;