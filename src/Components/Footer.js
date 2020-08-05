import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Footer.css"

export default function Footer() {
    return (
        <div className="container-fluid footer">
            <div className="row">
                <div className="col-lg-12 text-center footer-content">
                    <span>
                        <p className="creater">Made By Ali Jawwad</p>
                        <p className="github-repo"> <a href="https://github.com/jawwad-ali/React-Animation-Project4B">Github Repo</a> </p>
                    </span>
                </div>
            </div>
        </div>
    )
}
