import React, { Component } from "react";

class Technology extends Component {
    render() {
        return (
            <html>
                <link rel="stylesheet" href="/assets/css/technology.css" type="text/css" />
                <div id="technology">
                    <div className="min-height p-left d-none d-lg-block">
                        <div className="technology-strip">
                            <div className="title" style={{ paddingTop: "70px" }}>
                                TECHNOLOGY
                            </div>
                            <div className="text-1">
                                We are passionate technologist, problem solvers, envisioning the
                                future of supply chain. The common vision to empowering our
                                customers to create, secure, and operate adaptive applications
                                that reduce costs, improve operations brought us as team
                                together. We constantly endeavour to deliver a world class
                                technology solution and digital transformation consulting
                                services.
                            </div>
                            <div className="text-1">
                                The diverse team comes from niche tech stack, functional and
                                operations experts, data science to fulfil the common vision
                            </div>

                            <div className="container-blue">
                                <img src='assets/images/tech.jpeg' alt='img' className="tech-img" />

                                <div className="text-2">
                                    <h6 className="arrow-text">
                                        <img src='assets/images/arrow-right.svg' alt="img" />
                                        <span style={{ fontWeight: 'bold' }}>Cutting edge open source technology and certification</span>
                                    </h6>
                                    <h6 className="arrow-text">
                                        <img src='assets/images/arrow-right.svg' alt="img" />
                                        <span style={{ fontWeight: 'bold' }}>Best in class UI and UX product experience</span>
                                    </h6>
                                    <h6 className="arrow-text">
                                        <img src='assets/images/arrow-right.svg' alt="img" />
                                        <span style={{ fontWeight: 'bold' }}>Robust and Scalable backend supporting data and documents.</span>
                                    </h6>
                                    <h6 className="arrow-text">
                                        <img src='assets/images/arrow-right.svg' alt="img" />
                                        <span style={{ fontWeight: 'bold' }}>Cutting edge CI/CD pipelines</span>
                                    </h6>
                                    <h6 className="arrow-text">
                                        <img src='assets/images/arrow-right.svg' alt="img" />
                                        <span style={{ fontWeight: 'bold' }}>AI/ML and deployment of reinforcement learning</span>
                                    </h6>
                                </div>
                            </div>


                            {/* <a href="#careers" style={{ textDecoration: 'none', color: '#000000' }}>
                                <img src='assets/images/down-arrow.svg' alt='img' className="arrow-nav" />
                                <span>Careers</span>
                            </a> */}
                        </div>
                    </div>

                    <div className="small-screen-cont d-lg-none">
                        <div className="small-technology-strip">
                            <div className="title" style={{ paddingTop: "70px" }}>
                                TECHNOLOGY
                            </div>
                            <div className="text-1-small">
                                We are passionate technologist, problem solvers, envisioning the
                                future of supply chain. The common vision to empowering our
                                customers to create, secure, and operate adaptive applications
                                that reduce costs, improve operations brought us as team
                                together. We constantly endeavour to deliver a world class
                                technology solution and digital transformation consulting
                                services.
                            </div>
                            <div className="text-1-small">
                                The diverse team comes from niche tech stack, functional and
                                operations experts, data science to fulfil the common vision
                            </div>
                            <div className="pt-3 pb-3">
                                <h6 className="arrow-text">
                                    <img src='assets/images/arrow-right.svg' alt="img" />
                                    <span style={{ fontWeight: 'bold' }}>Cutting edge open source technology and certification</span>
                                </h6>
                                <h6 className="arrow-text">
                                    <img src='assets/images/arrow-right.svg' alt="img" />
                                    <span style={{ fontWeight: 'bold' }}>Best in class UI and UX product experience</span>
                                </h6>
                                <h6 className="arrow-text">
                                    <img src='assets/images/arrow-right.svg' alt="img" />
                                    <span style={{ fontWeight: 'bold' }}>Robust and Scalable backend supporting data and documents.</span>
                                </h6>
                                <h6 className="arrow-text">
                                    <img src='assets/images/arrow-right.svg' alt="img" />
                                    <span style={{ fontWeight: 'bold' }}>Cutting edge CI/CD pipelines</span>
                                </h6>
                                <h6 className="arrow-text">
                                    <img src='assets/images/arrow-right.svg' alt="img" />
                                    <span style={{ fontWeight: 'bold' }}>AI/ML and deployment of reinforcement learning</span>
                                </h6>
                            </div>
                            <img src='assets/images/tech.jpeg' alt='img' width="100%" height="auto" className="pb-5" />

                        </div>
                    </div>


                </div>
            </html>
        );
    }
}
export default Technology;
