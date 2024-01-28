import React, { Component } from "react";

class Jobs extends Component {

    render() {
        return (
            <html>
                <link rel="stylesheet" href="/assets/css/jobs.css" type="text/css" />
                <div id="jobs">
                    <div className="min-height p-left d-none d-lg-block job-cont">
                        <div className="job-strip"></div>
                        <div className="job-text-cont">
                            <div className="title pb-3">JOIN US</div>
                            <div className="job-text1 pb-2">
                                Shape the future of technology
                            </div>
                            <div className="job-text2 pb-2">
                                As a global company with unparalleled scale, a track record
                                of pioneering innovation, and a huge and influential client
                                base, we offer associates a chance to drive change and
                                improve the lives of millions of people arount the world.
                            </div>
                            <hr className="pb-3"></hr>
                            <h5 className="pb-2" style={{fontWeight: "bold"}}>India </h5>
                            <h6><a href="#">Bengaluru<img src='assets/images/diamond.svg' width='20px' height='20px' alt='img' /></a></h6>
                            <h6 className="pb-2"><a href="#">Thiruvananthapuram<img src='assets/images/diamond.svg' width='20px' height='20px' alt='img' /></a></h6>
                            <h5 className="pb-2" style={{fontWeight: "bold"}}>Singapore</h5>
                            <h6><a href="#">Singapore<img src='assets/images/diamond.svg' width='20px' height='20px' alt='img' /></a></h6>

                        </div>

                        <div className="job-strip1"></div>

                        <div className="job-strip2"></div>
                        <div className="job-strip3"></div>
                    </div>

                    <div className="small-screen-cont d-lg-none">
                        <div className="small-jobs-strip">
                            <div className="title pb-3">JOIN US</div>
                            <div className="job-text1 pb-2">
                                Shape the future of technology
                            </div>
                            <div className="job-text2 pb-2">
                                As a global company with unparalleled scale, a track record
                                of pioneering innovation, and a huge and influential client
                                base, we offer associates a chance to drive change and
                                improve the lives of millions of people arount the world.
                            </div>
                            <hr className="pb-2"></hr>
                            <h5 className="pb-2">India</h5>
                            <h5 className="pb-2">Singapore</h5>
                   

                            <div className="job-strip1-small"></div>

                        </div>
                    </div>
                </div>
            </html>
        );
    }
}
export default Jobs;