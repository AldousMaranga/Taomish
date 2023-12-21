import React, { Component } from "react";

class Careers extends Component {
    render() {
        return (
            <html>
                <link rel="stylesheet" href="/assets/css/career.css" type="text/css" />
                <div id="careers">
                    <div className="min-height p-left d-none d-lg-block career-cont">
                        <div className="career-strip"></div>
                        <div className="career-strip1">
                            <div className="career-img-cont">
                                <img alt="img" src="assets/images/career.jpg" className="career-img"/>
                            </div>
                            <div className="career-text-cont">
                                <div className="title">CAREER @ Taomish</div>
                                <div className="career-text1 pb-5">
                                    We indiscriminately invest in people
                                </div>
                                <div className="career-text2 pb-5">
                                    Taomish India is an equal opportunities employer and welcomes
                                    applications from all sections of society and does not
                                    discriminate on grounds of race, religion or belief, ethnic or
                                    national origin, disability, age, citizenship, marital,
                                    domestic or civil partnership status, sexual orientation,
                                    gender identity, or any other basis as protected by applicable
                                    law.
                                </div>
                                <div className="career-text2 pb-5"> 
                                    You will also have opportunities to hone your functional
                                    skills and expertise in an area of specialization. The sheer
                                    variety of work we do, and the experience it offers, provide
                                    an unbeatable platform from which to build a career.
                                </div>
                                <a href="#jobs" style={{ textDecoration: 'none', color: '#000000' }}>
                                    <img src='assets/images/down-arrow.svg' alt='img' className="arrow-nav"/>
                                    <span>Open Positions</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="min-height d-lg-none">Careers</div>
                </div>
            </html>
        );
    }
}
export default Careers;
