import React, { Component } from "react";
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { CCarousel, CCarouselItem } from '@coreui/react';
// import '@coreui/coreui/dist/css/coreui.min.css'

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
                                        <div className="text1">Bridging the complexity of
                                            <div className="text1-high">SaaS Cloud</div>
                                            Simplifying the digital transformation journey
                                        </div>
                                    </div>
                                    {/* <div className="over-text1">
                                        <div className="text2">Passionate engineer and entrepreneur on quest to build better solution for tomorrow.</div>
                                    </div> */}
                                </div>

                                <div className="landing-img-cont">
                                    <img src="assets/automation.gif" alt="img" width='100%' height='auto' />
                                </div>
                            </div>
                        </div>

                        <div className="landing-cont-small  d-lg-none">
                            <div className="landing-text-small">
                                <div className="over-text">
                                    <div className="text1">Bridging the complexity of <span className="text1-high">SaaS Cloud</span>. Simplifying the digital transformation journey</div>
                                </div>
                                {/* <div className="over-text1">
                                    <div className="text2">Passionate engineer and entrepreneur on quest to build better solution for tomorrow.</div>
                                </div> */}
                            </div>

                            <div className="landing-img-cont-small">
                                <img src="assets/automation.gif" alt="img" width='100%' height='auto' />
                            </div>
                        </div>
                    </div>
                </body>
            </html>

        )
    }
}
export default Landing;