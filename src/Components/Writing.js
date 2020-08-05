import React from 'react'
import "./Writing.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import uxImg from "./images/uxWriting.svg"
import Typewriter from 'typewriter-effect';
import copyWritingImg from "./images/webcp.svg"
import contentWritingImg from "./images/contentWriting.svg"

import useWebAnimations  from "@wellyshen/use-web-animations";

export default function Writing() {
    const { ref: a } = useWebAnimations({
        keyframes: {
            transform: ["translateY(-45px)"],
        },
        timing: {
            duration: 1500,
            iterations: Infinity,
            direction: "alternate",
            easing: "ease-in-out",
        },
    });
    const { ref: b } = useWebAnimations({
        keyframes: {
            transform: ["translateY(-45px)"],
        },
        timing: {
            duration: 1500,
            iterations: Infinity,
            direction: "alternate",
            easing: "ease-in-out",
        },
    });
    const { ref: c } = useWebAnimations({
        keyframes: {
            transform: ["translateY(-45px)"],
        },
        timing: {
            duration: 1500,
            iterations: Infinity,
            direction: "alternate",
            easing: "ease-in-out",
        },
    });
  
    return (
        <>
            <div className="container-fluid px-0 writingSection">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-sm-12 col-md-12 col-lg-6 writingImgDiv">
                            <img className="writingImg" src={uxImg} ref={a} alt="writing"/>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 writingTextSection margin-right">
                            <h2 style={{ marginLeft: "50px" }} >ux writing</h2>
                            <p className="writingText" style={{ marginLeft: "50px" }}>
                                <Typewriter
                                    options={{
                                        strings: ["I develop clear and useful text in product interfaces to help users reach a specific goal, whether that's completing a form or tapping a button.This includes every type of content from on - screen help systems, user onboarding and in -app messages to push notifications and tooltips."],
                                        autoStart: true,
                                        loop: true,

                                    }}
                                />
                            </p>
                        </div>
                        
                        <div className="col-sm-12 col-md-12 col-lg-6 writingTextSection writingSectionTwo pr-top writingSectionLg" style={{ marginTop: "-120px" }}>
                            <h2 className="sm-heading" style={{ marginLeft: "50px" }}>Website Copywriting</h2>
                            <p className="writingText" style={{ marginLeft: "50px" }}>
                                <Typewriter
                                    options={{
                                        strings: ["Your website is a dialogue with your audience. I capture the essence of your business and communicate it clearly. Carefully considered writing and SEO best practices allow me to craft the perfect user journey online. Let me draw the map that guides users every step of the way from discovery, to consideration, to conversion."],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </p>
                        </div>
                         <div className="col-sm-12 col-md-12 col-lg-6 pr-top-rev imgSectionTwo imgSectionLg" style={{ marginTop: "-70px" }}>
                            <img className="writingImg" src={copyWritingImg} ref={b} alt="writing" />
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-6 imgSectionThree imgSectionLgThree" style={{ marginTop: "-70px" }}>
                            <img className="writingImg" src={contentWritingImg} ref={c} alt="writing" />
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 writingTextSection margin-top-rev writingSectionThree" style={{ marginTop: "-120px" }}>
                            <h2 className="sm-heading" style={{ marginLeft: "50px" }} >Content Writing</h2>
                            <p className="writingText" style={{ marginLeft: "50px" }}>
                                <Typewriter
                                    options={{
                                        strings: ["Give your business a competitive edge with powerful content that can be targeted to any segment of your audience. No matter how large or complex your project, my custom-built solutions including articles, eDMs, and case studies will help you implement a plan that maximizes your business’s online exposure."],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
