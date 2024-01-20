import React, { Component } from "react";

class Company extends Component {
    render() {
        return (
            <html>
                <link rel="stylesheet" href="/assets/css/company.css" type="text/css" />
                <div id="company">
                    <div className="min-height p-left d-none d-lg-block company-cont">
                        <div className="company-strip text-cont">
                            <div className="title">COMPANY'S TIMELINE</div>
                        </div>
                        <div className="company-strip1">
                            <a href="#morals" style={{ textDecoration: 'none', color: '#000000' }} className="company-link">
                                <img src='assets/images/down-arrow.svg' alt='img' className="arrow-nav" />
                                <span>Where we're Heading</span>
                            </a>
                        </div>
                    </div>

                    <div className="small-screen-cont d-lg-none">
                        <div className="small-company-strip">
                            <div className="pb-5">
                                <a href="#morals" style={{ textDecoration: 'none', color: '#000000' }}>
                                    <img src='assets/images/down-arrow.svg' alt='img' height='100px' width='auto' />
                                    <span >Where we're Heading</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </html>

        )
    }
}
export default Company;