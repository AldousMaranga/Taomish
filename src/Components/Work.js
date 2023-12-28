import React, { Component } from "react";

class Work extends Component {



    render() {
        return (
            <html>
                <link rel="stylesheet" href="/assets/css/work.css" type="text/css" />
                <div id="work">
                    <div className="min-height p-left d-none d-lg-block">
                        <div className='work-cont'>
                            <div className="work-strip ">
                                <div className="title transform">WORK</div>
                            </div>

                            <div className="work-strip1" style={{ paddingTop: "2em" }}>
                                <div className='worktext'>
                                    We manage all technical aspects of software product
                                    development includes design the software or daata
                                    architecture, perform the engineering – low code development,
                                    automation and systems integration – and manage technical
                                    operations
                                </div>
                                <h6 className="worklist">
                                    <img src='assets/images/arrow-right.svg' alt="img" />
                                    <span>Digital Consulting</span>
                                </h6>
                                <h6 className="worklist">
                                    <img src='assets/images/arrow-right.svg' alt="img" />
                                    <span>Product Engineering</span>
                                </h6>
                                <h6 className="worklist">
                                    <img src='assets/images/arrow-right.svg' alt="img" />
                                    <span>Vulnerability & Security consulting</span>
                                </h6>
                                <h6 className="worklist padding-bottom">
                                    <img src='assets/images/arrow-right.svg' alt="img" />
                                    <span>Reinforcement Data models and Analytics</span>
                                </h6>

                                <div>
                                    <a href="#projects" style={{textDecoration: 'none', color: '#000000'}}>
                                        <img src='assets/images/down-arrow.svg' alt='img' height='100px' width='auto' />
                                        <span >Projects</span>
                                    </a>
                                </div>
                            </div>

                            <div className="globe">
                                <img src='assets/images/globe.png' alt='img' className="align-bot" width='100%' height='auto'></img>
                            </div>
                        </div>

                    </div>
                    <div className="small-screen-cont d-lg-none">
                        <div className="small-work-strip">
                            
                        </div>
                    </div>
                </div>
            </html>
        );
    }
}
export default Work;
