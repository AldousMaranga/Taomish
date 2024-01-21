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
                            {/*  */}
                            <section class="timeline">
                                <ol>
                                    <li style={{ width: "20px" }}>
                                        <div style={{ width: "700px" }}>
                                            <time>2019</time> Our Journey started, tinkering with commodity technology, soon it grew to develop custom options market making solutions. It transitioned to help us set up a core team of enthusiastic engineers and product manager to develop our own stack of supply chain trading and risk management products and solutions.
                                        </div>
                                    </li>
                                    <li style={{ width: "600px" }}>
                                        <div>
                                            <time>2020</time> We launched our first MVP SaaS CTRM solutions
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <time>2021</time> Worked with some trading companies to assist in digitizing there trade and risk reporting
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <time>2021</time> Developed a full stack farm to supply chain connected solution for TARU.AG
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <time>2022</time> Won some key accounts to deliver large scale transformation project
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <time>2023</time> Our journey continue to innovate and bring smile to our customer with go live and new wins
                                        </div>
                                    </li>
                                    <li></li>
                                </ol>


                            </section>
                            {/*  */}
                        </div>
                        <div className="company-strip1">
                            <br />
                            <br />

                            <a href="#morals" style={{ textDecoration: 'none', color: '#000000' }} className="company-link">
                                <img src='assets/images/down-arrow.svg' alt='img' className="arrow-nav" />
                                <span>Where we're Heading</span>
                            </a>
                        </div>
                    </div>

                    <div className="small-screen-cont d-lg-none">
                        <div className="small-company-strip">
                            <div className="pb-5">

                                <div class="timeline-small">
                                    <div class="container left">
                                        <div class="content">
                                            <span style={{ fontWeight: 'bold' }}>2019</span>
                                            <p>Our Journey started, tinkering with commodity technology, soon it grew to develop custom options market making solutions. It transitioned to help us set up a core team of enthusiastic engineers and product manager to develop our own stack of supply chain trading and risk management products and solutions.</p>
                                        </div>
                                    </div>
                                    <div class="container right">
                                        <div class="content">
                                            <span style={{ fontWeight: 'bold' }}>2020</span>
                                            <p>We launched our first MVP SaaS CTRM solutions</p>
                                        </div>
                                    </div>
                                    <div class="container left">
                                        <div class="content">
                                            <span style={{ fontWeight: 'bold' }}>2021</span>
                                            <p>Worked with some trading companies to assist in digitizing there trade and risk reporting</p>
                                        </div>
                                    </div>
                                    <div class="container right">
                                        <div class="content">
                                            <span style={{ fontWeight: 'bold' }}>2021</span>
                                            <p>Developed a full stack farm to supply chain connected solution for TARU.AG</p>
                                        </div>
                                    </div>
                                    <div class="container left">
                                        <div class="content">
                                            <span style={{ fontWeight: 'bold' }}>2022</span>
                                            <p>Won some key accounts to deliver large scale transformation project</p>
                                        </div>
                                    </div>
                                    <div class="container right">
                                        <div class="content">
                                            <span style={{ fontWeight: 'bold' }}>2023</span>
                                            <p>Our journey continue to innovate and bring smile to our customer with go live and new wins</p>
                                        </div>
                                    </div>
                                </div>

                                <div className=" pt-5">
                                    <a href="#morals" style={{ textDecoration: 'none', color: '#000000' }}>
                                        <img src='assets/images/down-arrow.svg' alt='img' height='100px' width='auto' />
                                        <span >Where we're Heading</span>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </html>

        )
    }
}
export default Company;