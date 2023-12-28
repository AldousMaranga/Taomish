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
                            <hr className="pb-2"></hr>
                            <h5 className="pb-2">India</h5>
                            <h5 className="pb-2">Americas</h5>
                            <h5 className="pb-2">Asia Pacific</h5>
                            <h5 className="pb-2">Europe and UK</h5>
                            <h5 className="pb-2">Middle East and Africa</h5>

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
                            <h5 className="pb-2">Americas</h5>
                            <h5 className="pb-2">Asia Pacific</h5>
                            <h5 className="pb-2">Europe and UK</h5>
                            <h5 className="pb-2">Middle East and Africa</h5>

                            <div className="job-strip1-small"></div>

                        </div>
                    </div>
                </div>
            </html>
        );
    }
}
export default Jobs;