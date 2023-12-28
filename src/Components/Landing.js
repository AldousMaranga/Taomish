import React, { Component } from "react";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { CCarousel, CCarouselItem } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'

class Landing extends Component {

    render() {
        return (
            <html>
                <link rel="stylesheet" href="/assets/css/landing.css" type="text/css" />

                <div className="min-height" id="home">
                    <div className="landing-cont">
                        <img src="assets/taomish.gif" alt="logo" className="under-image" />
                        <img src="assets/images/logo.png" alt="logo" height="70px" width="auto" className="over-image" />
                        <div className="over-text">
                            <div className="text1">Bridging the complexity of SaaS cloud. Simplifying the digital transformation journey</div>
                            <div className="text2">Passionate engineer and entrepreneur on quest to build better solution for tomorrow.</div>
                        </div>

                        <div className="over-div">
                            <CCarousel controls indicators transition="crossfade" className="custom-indicators">
                                <CCarouselItem className="bg1">
                                    <div>
                                        <div className="row">
                                            <div className="col-lg-4 d-none d-lg-block">
                                                <img src='assets/images/img.png' alt="img" className="img-div"/>
                                            </div>
                                            <div className="col-lg-8  d-block " style={{ fontSize: '12px' }}>
                                                In today’s mobile, ubiquitous, and instantaneous world. When other technology providers opt for easy problems, Taomish exclusively develops new age solutions for end-to-end supply chain, trading & risk where the structure of data models are much more complex & intense.
                                            </div>
                                        </div>
                                    </div>
                                </CCarouselItem>
                                <CCarouselItem className="bg2">
                                    <div>
                                        <div className="row">
                                            <div className="col-lg-4 d-none d-lg-block">
                                                <img src='assets/images/img.png' alt="img" className="img-div"/>
                                            </div>
                                            <div className="col-lg-8  d-block" style={{ fontSize: '10px' }}>
                                                <h6>What We Do</h6>
                                                In today’s mobile, ubiquitous, and instantaneous world. When other technology providers opt for easy problems, Taomish exclusively develops new age solutions for end-to-end supply chain, trading & risk where the structure of data models are much more complex & intense.
                                            </div>
                                        </div>
                                    </div>
                                </CCarouselItem>
                                <CCarouselItem className="bg3">
                                    <div>
                                        <div className="row">
                                            <div className="col-lg-4 d-none d-lg-block">
                                                <img src='assets/images/img.png' alt="img" className="img-div"/>
                                            </div>
                                            <div className="col-lg-8 d-block" style={{ fontSize: '10px' }}>
                                                <h6>Who We Are</h6>
                                                In today’s mobile, ubiquitous, and instantaneous world. When other technology providers opt for easy problems, Taomish exclusively develops new age solutions for end-to-end supply chain, trading & risk where the structure of data models are much more complex & intense.
                                            </div>
                                        </div>
                                    </div>
                                </CCarouselItem>
                                <CCarouselItem className="bg4">
                                    <div>
                                        <div className="row">
                                            <div className="col-lg-4 d-none d-lg-block">
                                                <img src='assets/images/img.png' alt="img" className="img-div"/>
                                            </div>
                                            <div className="col-lg-8  d-block" style={{ fontSize: '10px' }}>
                                                <h6>Work With Us</h6>
                                                In today’s mobile, ubiquitous, and instantaneous world. When other technology providers opt for easy problems, Taomish exclusively develops new age solutions for end-to-end supply chain, trading & risk where the structure of data models are much more complex & intense.
                                            </div>
                                        </div>
                                    </div>
                                </CCarouselItem>
                            </CCarousel>
                        </div>

                    </div>
                </div>
            </html>

        )
    }
}
export default Landing;