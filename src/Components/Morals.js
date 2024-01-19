import React, { Component } from "react";

class Morals extends Component {
    render() {
        return (
            <html>
                <link rel="stylesheet" href="/assets/css/moral.css" type="text/css" />
                <div id="morals">
                    <div className="min-height p-left d-none d-lg-block moral-cont">
                        <div className="moral-strip">
                            <div className="moral-text-cont1">
                                <div className="title">WHERE WE ARE HEADING</div>
                            </div>
                        </div>

                        <div className="moral-strip1">
                            <div className="mvo-cont">
                                <div className="mvo">
                                    <div className="mvo-header">Who we are?</div>
                                    <div className="pb-3">
                                        <span style={{ fontWeight: "bold" }}>Leaders</span> in Trading, Risk management, Technology and User experience.
                                    </div>
                                    <div>
                                        We are a 
                                        <span style={{ fontWeight: "bold" }}> community of problem solvers</span> combining 
                                        <span style={{ fontWeight: "bold" }}>human ingenuity, experience and technology innovation</span> to deliver best fit solutions.
                                    </div>
                                </div>
                                <div className="mvo">
                                    <div className="mvo-header">Our Mission</div>
                                    <div className="pb-3">
                                        Digitalise the supply chain with our Seamless, Ingenuine and Smart solutions helping our customers scale.
                                    </div>
                                    <div style={{ fontWeight: "bold" }} className="pb-3">
                                        What we strive for:
                                    </div>
                                    <ul>
                                        <li className="pb-2">Future Ready</li>
                                        <li className="pb-2">Innovative</li>
                                        <li className="pb-2">Relevant</li>
                                        <li className="pb-2">Strategic</li>
                                    </ul>
                                </div>
                                <div className="mvo">
                                    <div className="mvo-header">Our Vision</div>
                                    <div className="pb-3">
                                        Our values is what has become our business axioms that underpin everything we do.
                                    </div>
                                    <div className="pb-3">
                                        Our unwavered values:
                                    </div>
                                    <ul>
                                        <li className="pb-2">Ownership Mindset</li>
                                        <li className="pb-2">Innovation and ambition</li>
                                        <li className="pb-2">Integrity and transparency</li>
                                        <li className="pb-2">Client focused</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="small-screen-cont d-lg-none">
                        <div className="small-moral-strip">
                            <div className="pb-5 pt-5">
                                <div className="mvo-header">Our Purpose</div>
                                <div>
                                    Purpose. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Aenean euismod bibendum laoreet. Proin gravida dolor
                                    sit amet lacus accumsan et viverra justo commodo. Proin
                                    sodales pulvinar sic tempor.
                                </div>
                            </div>
                            <div className="pb-5">
                                <div className="mvo-header">Mission</div>
                                <div>
                                    Mission. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Aenean euismod bibendum laoreet. Proin gravida dolor
                                    sit amet lacus accumsan et viverra justo commodo. Proin
                                    sodales pulvinar sic tempor.
                                </div>
                            </div>
                            <div className="pb-5">
                                <div className="mvo-header">Vision</div>
                                <div>
                                    Vision. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Aenean euismod bibendum laoreet. Proin gravida dolor
                                    sit amet lacus accumsan et viverra justo commodo. Proin
                                    sodales pulvinar sic tempor.
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </html >
        );
    }
}
export default Morals;
