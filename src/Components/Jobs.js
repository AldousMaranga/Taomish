import React, { useState } from 'react';

function Jobs() {
    const [activeTab, setActiveTab] = useState('default-tab');

    const openTab = (tabName) => {
        // Hide all tab content
        const tabContents = document.getElementsByClassName('tab-content');
        for (let i = 0; i < tabContents.length; i++) {
            tabContents[i].style.display = 'none';
        }

        // Deactivate all tab buttons
        const tabButtons = document.getElementsByClassName('tab-button');
        for (let i = 0; i < tabButtons.length; i++) {
            tabButtons[i].classList.remove('active');
        }

        // Show the selected tab content
        document.getElementById(tabName).style.display = 'block';

        // Activate the selected tab button
        const activeButton = document.querySelector(`.tab-button[data-tab="${tabName}"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        }
    };

    return (
        <html>
            <link rel="stylesheet" href="/assets/css/jobs.css" type="text/css" />
            <body>
                <div id="jobs">
                    <div className="min-height p-left d-none d-lg-block job-cont">
                        <div id="default-tab" class="tab-content active">
                            <div className='job-placeholder'>
                                <img src='/assets/images/job-img.jpg' alt='img' width="auto" height="500px" />
                            </div>
                            <div className='text-job job-text1'>
                                Look for available jobs near you!
                            </div>
                        </div>

                        <div className="job-strip"></div>
                        <div className="job-text-cont">
                            <div className="title pb-3">JOIN US</div>
                            <div className="job-text1 pb-2">
                                Shape the future of technology
                            </div>
                            <div className="job-text2 pb-1">
                                As a global company with unparalleled scale, a track record
                                of pioneering innovation, and a huge and influential client
                                base, we offer associates a chance to drive change and
                                improve the lives of millions of people arount the world.
                            </div>
                            <hr className="pb-1"></hr>
                            <h5 className="pb-2" style={{ fontWeight: "bold" }}>India </h5>

                            <h6><a className="tab-button" data-tab="tab1" onClick={() => openTab('tab1')}><img src='assets/images/diamond.svg' width='20px' height='20px' alt='img' />Bengaluru</a></h6>
                            <h6 className="pb-2"><a className="tab-button" data-tab="tab2" onClick={() => openTab('tab2')}><img src='assets/images/diamond.svg' width='20px' height='20px' alt='img' />Thiruvananthapuram</a></h6>

                            <h5 className="pb-2" style={{ fontWeight: "bold" }}>Singapore</h5>

                            <h6><a className="tab-button" data-tab="tab3" onClick={() => openTab('tab3')}><img src='assets/images/diamond.svg' width='20px' height='20px' alt='img' />Singapore</a></h6>

                            <h5 className="pb-2" style={{ fontWeight: "bold" }}>UAE</h5>
                            <h6><a className="tab-button" data-tab="tab4" onClick={() => openTab('tab4')}><img src='assets/images/diamond.svg' width='20px' height='20px' alt='img' />UAE</a></h6>



                        </div>

                        <div className="job-strip1">
                            <div id="tab1" class="tab-content job-list-cont">Content for Tab 1</div>
                            <div id="tab2" class="tab-content job-list-cont">Content for Tab 2</div>
                            <div id="tab3" class="tab-content job-list-cont">Content for Tab 3</div>
                            <div id="tab4" class="tab-content job-list-cont">Content for Tab 4</div>
                        </div>

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
                            <h5 className="pb-2" style={{ fontWeight: "bold" }}>India </h5>

                            <h6><a className="tab-button" data-tab="tab1-small" onClick={() => openTab('tab1-small')}><img src='assets/images/diamond.svg' width='20px' height='20px' alt='img' />Bengaluru</a></h6>
                            <h6 className="pb-2"><a className="tab-button" data-tab="tab2-small" onClick={() => openTab('tab2-small')}><img src='assets/images/diamond.svg' width='20px' height='20px' alt='img' />Thiruvananthapuram</a></h6>

                            <h5 className="pb-2" style={{ fontWeight: "bold" }}>Singapore</h5>

                            <h6><a className="tab-button" data-tab="tab3-small" onClick={() => openTab('tab3-small')}><img src='assets/images/diamond.svg' width='20px' height='20px' alt='img' />Singapore</a></h6>

                            <h5 className="pb-2" style={{ fontWeight: "bold" }}>UAE</h5>
                            <h6><a className="tab-button" data-tab="tab4-small" onClick={() => openTab('tab4-small')}><img src='assets/images/diamond.svg' width='20px' height='20px' alt='img' />UAE</a></h6>



                            <div className="job-strip1-small pb-5 pt-3">
                                <div id="default-tab" class="tab-content active">
                                    <div className='job-text1' style={{ textAlign: 'center' }}>
                                        Jobs near you!
                                    </div>
                                    <img src='/assets/images/job-img.jpg' alt='img' width="auto" height="500px" />
                                </div>
                                <div id="tab1-small" class="tab-content">Content for Tab 1</div>
                                <div id="tab2-small" class="tab-content">Content for Tab 2</div>
                                <div id="tab3-small" class="tab-content">Content for Tab 3</div>
                                <div id="tab4-small" class="tab-content">Content for Tab 3</div>

                            </div>

                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
export default Jobs;