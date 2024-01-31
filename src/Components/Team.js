import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";

class Team extends Component {
    render() {
        return (
            <html>
                <link rel="stylesheet" href="/assets/css/team.css" type="text/css" />
                <div id="team">
                    <div className="min-height p-left d-none d-lg-block team-cont">
                        <div className="team-strip"></div>
                        <div className="team-strip1">

                            <div className="team-text pb-3">
                                <div className="title">TEAM</div>
                                <div className="team-text1">
                                    Diverse team of corporate innovators, product managers,
                                    designers and engineers as you develop a winning future-back
                                    strategy.
                                </div>
                            </div>
                            <div className="carousel-cont">
                                <CCarousel transition="crossfade" controls>
                                    <CCarouselItem className="carousel-item">
                                        <CImage className="carousel-img" src="assets/images/slide1.jpg" alt="slide 1" />
                                    </CCarouselItem>
                                    <CCarouselItem className="carousel-item">
                                        <CImage className="carousel-img" src="assets/images/slide2.jpg" alt="slide 2" />
                                    </CCarouselItem>
                                    <CCarouselItem className="carousel-item">
                                        <CImage className="carousel-img" src='assets/images/slide3.jpg' alt="slide 3" />
                                    </CCarouselItem>
                                </CCarousel>
                            </div>
                            <div className="arrow-nav" style={{ width: '200px', marginLeft: '50px'}}>
                                <a href="#careers" style={{ textDecoration: 'none'}}>
                                    <img src='assets/images/down-arrow.svg' alt='img' height="100px" width="auto" />
                                    <span>Careers</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="small-screen-cont d-lg-none">
                        <div className="small-team-strip">
                            <div className="title">TEAM</div>
                            <div className="team-text1 pb-4">
                                Diverse team of corporate innovators, product managers,
                                designers and engineers as you develop a winning future-back
                                strategy.
                            </div>
                            <div className="carousel-cont-small pb-4">
                                <CCarousel transition="crossfade" controls>
                                    <CCarouselItem className="carousel-item">
                                        <CImage className="carousel-img" src="assets/images/slide1.jpg" alt="slide 1" />
                                    </CCarouselItem>
                                    <CCarouselItem className="carousel-item">
                                        <CImage className="carousel-img" src="assets/images/slide2.jpeg" alt="slide 2" />
                                    </CCarouselItem>
                                    <CCarouselItem className="carousel-item">
                                        <CImage className="carousel-img" src='assets/images/slide3.jpg' alt="slide 3" />
                                    </CCarouselItem>
                                </CCarousel>
                            </div>

                            <div className="pb-5">
                                <a href="#careers" style={{ textDecoration: 'none', color: '#000000' }}>
                                    <img src='assets/images/down-arrow.svg' alt='img' height='100px' width='auto' />
                                    <span >Careers</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </html>
        );
    }
}
export default Team;
