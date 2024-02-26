import React, { Component } from "react";

class Company extends Component {
    render() {
        return (
            <html>
                <link rel="stylesheet" href="/assets/css/company.css" type="text/css" />
                <body>
                    <div id="company">
                        <div className="min-height p-left d-none d-lg-block company-cont">
                            <div className="company-strip text-cont">
                                <div className="title">TIMELINE</div>
                                {/*  */}
                                <section class="timeline">
                                    <ol>
                                        <li style={{ width: "20px" }}>
                                            <div style={{ width: "500px" }}>
                                                <time>2019</time> We started tinkering with commodity tech, then developed custom market-making solutions. Now, we've built our own supply chain trading and risk management products with a dedicated team.
                                            </div>
                                        </li>
                                        <li style={{ width: "400px" }}>
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
                                        <li>
                                            <div style={{ width: "450px" }}>
                                                <time>2024</time> By consistently striving to better ourselves every day, we are already making great progress. Join us on this journey and experience the thrill of cutting-edge technology that drives success.
                                            </div>
                                        </li>
                                        <li style={{ width: "450px" }}></li>
                                    </ol>


                                </section>

                            </div>
                            <div className="company-strip1">

                            </div>
                        </div>

                        <div className="small-screen-cont d-lg-none">
                            <div className="small-company-strip">
                                <div className="pb-5">

                                    <div className="title pb-3">TIMELINE</div>

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
                                        <div class="container right">
                                            <div class="content">
                                                <span style={{ fontWeight: 'bold' }}>2024</span>
                                                <p>By consistently striving to better ourselves every day, we are already making great progress. Join us on this journey and experience the thrill of cutting-edge technology that drives success.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div className=" pt-5">
                                    <a href="#morals" style={{ textDecoration: 'none', color: '#000000' }}>
                                        <img src='assets/images/down-arrow.svg' alt='img' height='100px' width='auto' />
                                        <span >Where we're Heading</span>
                                    </a>
                                </div> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </body>
            </html>

        )
    }
}
export default Company;