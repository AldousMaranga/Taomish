import React, { Component } from "react";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { CCarousel, CCarouselItem } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'

class Landing extends Component {

    render() {
        return (
            <html>
                <link rel="stylesheet" href="/assets/css/landing.css" type="text/css" />
                <body>
                    <div id="home">
                        <div className="min-height d-none d-lg-block">
                            <div className="landing-cont">
                                {/* <img src="assets/images/new-landing.png" alt="logo" className="under-image" /> */}
                                <div className="landing-text">
                                    <div className="over-text">
                                        <div className="text1">Bridging the complexity of SaaS cloud. Simplifying the digital transformation journey</div>
                                    </div>
                                    <div className="over-text1">
                                        <div className="text2">Passionate engineer and entrepreneur on quest to build better solution for tomorrow.</div>
                                    </div>
                                </div>

                                <div className="landing-img-cont">
                                    <CCarousel transition="crossfade">
                                        <CCarouselItem>
                                            <img src="assets/images/landing-img1.png" alt="img" className="landing-img" />
                                        </CCarouselItem>
                                        <CCarouselItem>
                                            <img src="assets/images/landing-img2.png" alt="img" className="landing-img" />
                                        </CCarouselItem>
                                        <CCarouselItem>
                                            <img src="assets/images/landing-img3.png" alt="img" className="landing-img" />
                                        </CCarouselItem>
                                    </CCarousel>
                                </div>
                            </div>
                        </div>

                        <div className="landing-cont-small  d-lg-none">
                            <div className="landing-text-small">
                                <div className="over-text">
                                    <div className="text1">Bridging the complexity of SaaS cloud. Simplifying the digital transformation journey</div>
                                </div>
                                <div className="over-text1">
                                    <div className="text2">Passionate engineer and entrepreneur on quest to build better solution for tomorrow.</div>
                                </div>
                            </div>

                            <div className="landing-img-cont-small">
                                <CCarousel transition="crossfade" className="carousel">
                                    <CCarouselItem>
                                        <img src="assets/images/landing-img1.png" alt="img" className="landing-img" />
                                    </CCarouselItem>
                                    <CCarouselItem>
                                        <img src="assets/images/landing-img2.png" alt="img" className="landing-img" />
                                    </CCarouselItem>
                                    <CCarouselItem>
                                        <img src="assets/images/landing-img3.png" alt="img" className="landing-img" />
                                    </CCarouselItem>
                                </CCarousel>
                            </div>
                        </div>
                    </div>
                </body>
            </html>

        )
    }
}
export default Landing;