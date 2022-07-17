import React, { useState } from 'react';
import { testimonialsData } from '../../data/testimonialsData';
import "./Testimonials.css"
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

const Testimonials = () => {
    const [selected,setSeleted]=useState(0)
    const tlength= testimonialsData.length;
    return (
        <div className='testimonials-container'>
            <div className="left-t">
                <span>TESTIMONIALS</span>
                <span className='stroke-text'>WHAT THEY</span>
                <span>SAY ABOUT US</span>
                <span>{testimonialsData[selected].review}</span>
                <span>
                    <span style={{color:"var(--orange)"}}>{testimonialsData[selected].name}</span> - {testimonialsData[selected].status}
                </span>
            </div>
            <div className="right-t">
                <div></div>
                <div></div>
                <img src={testimonialsData[selected].image} alt="" />
                <div className='arrows'>
                    <img onClick={()=>{
                        selected===0?setSeleted(tlength-1):setSeleted(selected-1)
                    }} src={leftArrow} alt="" />
                    <img onClick={()=>{
                        selected===tlength-1?setSeleted(0):setSeleted(selected+1)
                    }} src={rightArrow} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Testimonials;