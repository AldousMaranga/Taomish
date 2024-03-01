import React, { Component } from "react";

class Careers extends Component {
    render() {
        return (
            <html>
                <link rel="stylesheet" href="/assets/css/career.css" type="text/css" />
                <body>
                    <div id="careers">
                        <div className="min-height p-left d-none d-lg-block career-cont">
                            <div className="career-strip"></div>
                            <div className="career-strip1">
                                <div className="career-img-cont">
                                    <img alt="img" src="assets/images/new-images/career.jpg" className="career-img" />
                                </div>
                                <div className="career-text-cont">
                                    <div className="title">CAREER @ Taomish</div>
                                    <div className="career-text1 pb-3">
                                        We invest in people, indiscriminately.
                                    </div>
                                    <div className="career-text2 pb-3">
                                        At Taomish India, we strongly believe in creating an all-inclusive work environment where everyone is valued and respected. We are proud to be an equal opportunity employer and welcome applications from individuals of all backgrounds, without any discrimination based on factors such as race, religion, ethnicity, disability, age, citizenship, marital or civil status, sexual orientation, gender identity, or any other protected status as outlined by law.
                                    </div>
                                    <div className="career-text2 pb-3">
                                        We understand the importance of fostering a diverse team, as it brings a variety of perspectives and ideas to the table and ultimately helps us grow as a company.
                                    </div>
                                    <div className="career-text2">
                                        Working at Taomish India offers more than just a job, it's an opportunity to learn and hone your skills in a supportive and nurturing environment. With a diverse range of projects and experiences, you'll have the chance to specialize and advance professionally. We provide meaningful opportunities to all.
                                    </div>
                                    {/* <div className="arrow-nav" style={{ width: '240px', paddingRight: "20px" }}>
                                    <a href="#jobs" style={{ textDecoration: 'none', color: '#000000' }}>
                                        <img src='assets/images/down-arrow.svg' alt='img' height="100px" width="auto" />
                                        <span>Open Positions</span>
                                    </a>
                                </div> */}

                                </div>
                            </div>
                        </div>

                        <div className="small-screen-cont d-lg-none">
                            <div className="small-career-strip">
                                <div className="title pt-5">CAREER @ Taomish</div>
                                <div className="career-text1 pb-5">
                                    We indiscriminately invest in people
                                </div>
                                <div className="career-text2 pb-5">
                                    At Taomish India, we strongly believe in creating an all-inclusive work environment where everyone is valued and respected. We are proud to be an equal opportunity employer and welcome applications from individuals of all backgrounds, without any discrimination based on factors such as race, religion, ethnicity, disability, age, citizenship, marital or civil status, sexual orientation, gender identity, or any other protected status as outlined by law.
                                </div>
                                <div className="career-text2 pb-5">
                                    We understand the importance of fostering a diverse team, as it brings a variety of perspectives and ideas to the table and ultimately helps us grow as a company.
                                </div>
                                <div className="career-text2 pb-3">
                                    Working at Taomish India offers more than just a job, it's an opportunity to learn and hone your skills in a supportive and nurturing environment. With a diverse range of projects and experiences, you'll have the chance to specialize and advance professionally. We provide meaningful opportunities to all.
                                </div>
                                <img alt="img" src="assets/images/new-images/career.jpg" className="career-img pb-3" />

                                {/* <div className="pb-5">
                                <div className="arrow-nav" style={{ width: '270px', paddingRight: "20px" }}>
                                    <a href="#jobs" style={{ textDecoration: 'none', color: '#000000' }}>
                                        <img src='assets/images/down-arrow.svg' alt='img' height="100px" width="auto" />
                                        <span>Open Positions</span>
                                    </a>
                                </div>
                            </div> */}
                            </div>
                        </div>
                    </div>
                </body>
            </html>
        );
    }
}
export default Careers;
