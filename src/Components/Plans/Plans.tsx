import React from 'react';
import { plansData } from '../../data/plansData';
import "./Plans.css"
import whitetick from "../../assets/whiteTick.png"
import rightArrow from "../../assets/rightArrow.png"

const Plans = () => {
    return (
        <div className='plans-container'>
            <div className='plans-header'>
                <span className='stroke-text'>READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className='stroke-text'>NOW WITHUS</span>
            </div>
            <div className='plans'>
                {
                    plansData.map(plan=>(
                        <div className='single-plan'>
                            {plan.icon}
                            <span>{plan.name}</span>
                            <span>$ {plan.price}</span>
                            <div className='features'>
                                {
                                    plan.features.map(feature=>(
                                        <div className='single-plan-feature'>
                                            <img src={whitetick} alt="" />
                                            <span>{feature}</span>
                                        </div>
                                    ))
                                }
                            </div>
                            <div>
                                <span>{"See more benefits ->"}</span>
                            </div>
                            <button className='btn'>Join Now</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Plans;