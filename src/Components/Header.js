import React from 'react'
import "./Header.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Brain from "./images/brain.svg"
import layerMachine from "./images/layerMachine.svg"
import useWebAnimations , {backInLeft , backInRight} from "@wellyshen/use-web-animations";

export default function Header() {
    const { ref } = useWebAnimations({
        keyframes: {
            transform: ["translateY(70px)"],
        },
        timing: {
            duration: 3000,
            iterations: Infinity,
            direction: "alternate",
            easing: "ease-in-out",
        },
    });
    const { ref: a } = useWebAnimations({
        ...backInLeft
    });
    const { ref: b } = useWebAnimations({
        ...backInRight
    });
    return (
        <div className="container-fluid header">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6  heading-section " ref={a}> 
                    <h1 className="header-heading" >
                        <span className="firstHalf">cortex</span>
                        <span className="secondHalf">copywriter</span>
                    </h1>
                    <p className="header-text">
                        Enhance your communications with psychology-based copywriting and UX writing
                    </p>
                    <button className="headerBtn">Send Message</button>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-6 img-Div" ref={b}>
                    <img src={Brain} alt="brain" className="brain-img"  ref={ref}/>
                    <img src={layerMachine} alt="layer Machine" className="layerMachine" />
                </div>

            </div>
        </div>
    )
}