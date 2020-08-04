import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import useWebAnimations  from "@wellyshen/use-web-animations";
import "./UsefulUx.css"
import chatbot from "./images/chatbot.jpg"
import speed from "./images/speedpix.jpg"
import startScale from "./images/startscale.jpg"

export default function UsefulUx() {

    const { ref } = useWebAnimations({
        keyframes: {
            transform: ["translateX(15px)"],
        },
        timing: {
            duration: 1500,
            iterations: Infinity,
            direction: "alternate",
            easing: "ease-in-out",
        },
    });
    const { ref:b } = useWebAnimations({
        keyframes: {
            transform: ["translateX(15px)"],
        },
        timing: {
            duration: 1500,
            iterations: Infinity,
            direction: "alternate",
            easing: "ease-in-out",
        },
    });
    const { ref:c } = useWebAnimations({
        keyframes: {
            transform: ["translateX(15px)"],
        },
        timing: {
            duration: 1500,
            iterations: Infinity,
            direction: "alternate",
            easing: "ease-in-out",
        },
    });
    return (
        <div className="container-fluid samplesSection">
            <div className="container">
                <div className="text-center">
                    <h3 className="samples-heading">Samples</h3>
                    <h4 >Useful UX</h4>
                </div>
                <div className="row">
                    <div className="col-lg-4 bs-cards" ref={ref}>
                        <div className="card">
                            <img className="sampleImgSection card-img-top"  src={chatbot} alt="Card  cap" />
                            <div className="card-body">
                                <h5 className="card-title">Scripted Chatbot</h5>
                                <p className="card-text">Conversation design guidelines such as chatbot personality, flowcharts, and
                                scripts helped me convert complex mattress fitting data into simple dialogue for a scripted chatbot
                                that guides customers in choosing the right mattress for their weight range.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 bs-cards" ref={b}>
                        <div className="card">
                            <img className="sampleImgSection card-img-top"  src={startScale} alt="Card  cap" />
                            <div className="card-body">
                                <h5 className="card-title">Product Development</h5>
                                <p className="card-text">As the sole UX writer on a product team building the 'Uber of marketing', I 
                                wrote and designed web copy, microcopy, notifications, forms, FAQs, sales video script, automated 
                                emails, signup page, login page, pricing page, checkout page, and more As the sole UX on a product team  </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 bs-cards" ref={c}>
                        <div className="card">
                            <img className="sampleImgSection card-img-top"  src={speed} alt="Card  cap" />
                            <div className="card-body">
                                <h5 className="card-title">User Onboarding</h5>
                                <p className="card-text">Here is the first screen in an onboarding process I wrote for a SaaS product.
                                To create a smooth introduction to the product and improve conversion rates, I used reassuring
                                 details and informative labels to clear possible uncertainties and reduce ambiguity.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
