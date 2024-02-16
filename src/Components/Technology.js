import React, { Component } from "react";

class Technology extends Component {
    render() {
        return (
            <html>
                <link rel="stylesheet" href="/assets/css/technology.css" type="text/css" />
                <body>
                    <div id="technology">
                        <div className="min-height p-left d-none d-lg-block">
                            <div className="technology-strip">
                                <div className="title tech-spacing" style={{ paddingTop: "20px" }}>
                                    TECHNOLOGY
                                </div>
                                <div className="text-1 tech-spacing">
                                    We are a team of enthusiastic technologists and innovative problem-solvers, always looking ahead to the ever-evolving world of the supply chain. Our driving goal is to empower our clients by providing them with the tools and resources to build, protect, and optimize their operations through dynamic applications. With a diverse group of experts in technology, function, and operations, as well as data analysts, we are dedicated to delivering top-of-the-line solutions and consulting services that align with our collective vision for the future.
                                </div>

                                <div className="container-blue">
                                    {/* <img src='assets/images/tech.jpeg' alt='img' className="tech-img" /> */}

                                    <div class="wistia-cont">
                                        <div class="wistia-cont1">
                                            <span class="wistia_embed wistia_async_wvazajn35u popover=true videoFoam=true wistia-cont2">&nbsp;</span>
                                        </div>
                                    </div>

                                    <div className="text-2">
                                        <h6 className="arrow-text">
                                            <img src='assets/images/arrow-right.svg' alt="img" className="arrow" />
                                            <span style={{ fontWeight: 'bold' }}>Cutting-edge open-source technology and certification</span>
                                        </h6>
                                        <h6 className="arrow-text">
                                            <img src='assets/images/arrow-right.svg' alt="img" className="arrow" />
                                            <span style={{ fontWeight: 'bold' }}>Best-in-class UI and UX product experience</span>
                                        </h6>
                                        <h6 className="arrow-text">
                                            <img src='assets/images/arrow-right.svg' alt="img" className="arrow" />
                                            <span style={{ fontWeight: 'bold' }}>Robust and scalable backend supporting data and documents</span>
                                        </h6>
                                        <h6 className="arrow-text">
                                            <img src='assets/images/arrow-right.svg' alt="img" className="arrow" />
                                            <span style={{ fontWeight: 'bold' }}>Cutting-edge CI/CD pipelines</span>
                                        </h6>
                                        <h6 className="arrow-text">
                                            <img src='assets/images/arrow-right.svg' alt="img" className="arrow" />
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
                                    We are a team of enthusiastic technologists and innovative problem-solvers, always looking ahead to the ever-evolving world of the supply chain. Our driving goal is to empower our clients by providing them with the tools and resources to build, protect, and optimize their operations through dynamic applications. With a diverse group of experts in technology, function, and operations, as well as data analysts, we are dedicated to delivering top-of-the-line solutions and consulting services that align with our collective vision for the future.
                                </div>
                                <img src='assets/images/tech.jpeg' alt='img' width="100%" height="auto" className="pt-5" />

                                <div className="container-blue-small">
                                    <h6 className="arrow-text">
                                        <img src='assets/images/arrow-right.svg' alt="img" className="arrow" />
                                        <span style={{ fontWeight: 'bold' }}>Cutting-edge open-source technology and certification</span>
                                    </h6>
                                    <h6 className="arrow-text">
                                        <img src='assets/images/arrow-right.svg' alt="img" className="arrow" />
                                        <span style={{ fontWeight: 'bold' }}>Best-in-class UI and UX product experience</span>
                                    </h6>
                                    <h6 className="arrow-text">
                                        <img src='assets/images/arrow-right.svg' alt="img" className="arrow" />
                                        <span style={{ fontWeight: 'bold' }}>Robust and scalable backend supporting data and documents</span>
                                    </h6>
                                    <h6 className="arrow-text">
                                        <img src='assets/images/arrow-right.svg' alt="img" className="arrow" />
                                        <span style={{ fontWeight: 'bold' }}>Cutting-edge CI/CD pipelines</span>
                                    </h6>
                                    <h6 className="arrow-text">
                                        <img src='assets/images/arrow-right.svg' alt="img" className="arrow" />
                                        <span style={{ fontWeight: 'bold' }}>AI/ML and deployment of reinforcement learning</span>
                                    </h6>
                                </div>

                            </div>
                        </div>


                    </div>
                </body>
            </html>
        );
    }
}
export default Technology;
