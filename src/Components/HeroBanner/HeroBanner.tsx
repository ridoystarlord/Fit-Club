import React from 'react';
import Header from '../Header/Header';
import "./HeroBanner.css"

import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";

const HeroBanner = () => {
    return (
        <div className='hero'>
           <div className="left-h">
                <Header />
                <div className="ads">
                    <div></div>
                    <span>The Best Fitness Club</span>
                </div>
                <div className="hero-text">
                    <div><span className='stroke-text'>Shape </span><span>Your</span></div>
                    <div><span>Ideal Body </span></div>
                    <div>
                        <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                    </div>
                </div>
                <div className='figures'>
                    <div><span>+ 140</span><span>EXPERT COACHES</span></div>
                    <div><span>+ 978</span><span>MEMBERS JOINED</span></div>
                    <div><span>+ 50</span><span>FITNESS PROGRAMS</span></div>
                </div>
                <div className='hero-btn'>
                    <button className='btn'>Get Started</button>
                    <button className='btn'>Learn More</button>
                </div>
           </div>
           <div className="right-h">
                <button className='btn'>Join Now</button>
                <div className='heart-rate'>
                    <img src={heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 BPM</span>
                </div>
                <img src={hero_image} alt="" className='hero_image' />
                <img src={hero_image_back} alt="" className='hero_image_back' />

                <div className="calories">
                    <img src={calories} alt="" />
                    <div>
                        <span>Calories burned</span>
                        <span>220 kcal</span>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default HeroBanner;