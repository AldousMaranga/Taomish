import React, { useState, useEffect } from 'react';

function Products() {
    const [activeTab, setActiveTab] = useState();

    const openCard = (cardName) => {
        setActiveTab(cardName);
    }

    useEffect(() => {
        const cardCont = document.querySelectorAll('.cards');
        cardCont.forEach((card) => {
            card.style.display = 'none';
        });

        const cardClick = document.querySelectorAll('.card-cont');
        cardClick.forEach((contButton) => {
            contButton.classList.remove('active');
        });

        const activeTabElement = document.getElementById(activeTab);
        if (activeTabElement) {
            activeTabElement.style.display = 'block';
        }

        const activeCont = document.querySelector(`.card-cont[data-tab="${activeTab}"]`);
        if (activeCont) {
            activeCont.classList.add('active');
        }
    }, [activeTab]);

    return (
        <html>
            <link rel="stylesheet" href="/assets/css/product.css" type="text/css" />
            <body>
                <div id="projects">
                    <div className="min-height p-left d-none d-lg-block">
                        <div className="project-cont">
                            <div className="project-strip">
                                <div className="title t-txt1">PRODUCTS</div>
                                <div className="t-txt2">Our latest business escapade</div>
                                <div className="t-txt3">
                                    <div className="scroll-width">
                                        <div className="card-column">
                                            {/* Card 1 */}
                                            <a href="#card1" data-tab="card1" onClick={() => openCard('card1')} className="card-cont">
                                                <div className="card">
                                                    <div className="front-card">
                                                        <div className="card-text">
                                                            Trading and Risk Management
                                                        </div>
                                                        <img src="assets/images/ask.svg" alt="img" width="auto" height="200px" />
                                                    </div>
                                                    <div className="back-card">
                                                        <img src="assets/images/project-backdiv.svg" alt="img" className="card-back"></img>
                                                        <div className="bc-txt1">Xceler.ai</div>
                                                        <div className="bc-txt2">Cloud first SaaS based contract management, planning till its fulfillment workflow driven platform. Modular and API driven for seamless data omni channel </div>
                                                    </div>
                                                </div>
                                            </a>
                                            {/* Card 2 */}
                                            <a href='#card2' data-tab="card2" onClick={() => openCard('card2')} className="card-cont">
                                                <div className="card">
                                                    <div className="front-card">
                                                        <div className="card-text pb-5">
                                                            Treasury
                                                        </div>
                                                        <img src="assets/images/wireframing.svg" alt="img" width="100%" height="auto" />
                                                    </div>
                                                    <div className="back-card">
                                                        <img src="assets/images/project-backdiv1.svg" alt="img" className="card-back"></img>
                                                        <div className="bc-txt1">Xceler.ai</div>
                                                        <div className="bc-txt2">Comprehensive bank cash, credit facility and investment management platform providing a discerning view to the liquidity and risk.</div>
                                                    </div>
                                                </div>
                                            </a>
                                            {/* Card 3 */}
                                            <a href='#card3' data-tab="card3" onClick={() => openCard('card3')} className="card-cont">
                                                <div className="card">
                                                    <div className="front-card">
                                                        <div className="card-text pb-4">
                                                            Advance Risk Analytics
                                                        </div>
                                                        <img src="assets/images/security.svg" alt="img" width="100%" height="auto" />
                                                    </div>
                                                    <div className="back-card">
                                                        <img src="assets/images/project-backdiv2.svg" alt="img" width="auto" height="120px" style={{ marginBottom: '10px' }}></img>
                                                        <div className="bc-txt1">Xceler.ai</div>
                                                        <div className="bc-txt2">Seamless inventory management platform. Workflow and driven build, draw, transfer and processing of inventory.</div>
                                                    </div>
                                                </div>
                                            </a>
                                            {/* Card 4 */}
                                            <a href='#card4' data-tab="card4" onClick={() => openCard('card4')} className="card-cont">
                                                <div className="card">
                                                    <div className="front-card">
                                                        <div className="card-text">
                                                            Taru.ag
                                                        </div>
                                                        <img src="assets/images/analytics.svg" alt="img" width="auto" height="220px" style={{ paddingLeft: '20px' }} />
                                                    </div>
                                                    <div className="back-card">
                                                        <img src="assets/images/project-backdiv3.svg" alt="img" height="150px" width="auto" style={{ marginLeft: '35px' }}></img>
                                                        <div className="bc-txt1">Taru.ag</div>
                                                        <div className="bc-txt2">Agri value chain management platform to improve farm, farmer and farming livelihood</div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="project-strip1">
                            </div> */}

                            <div className="project-strip2 padding-top">
                                {/* <div className="arrow-nav d-none d-lg-block" style={{ width: '220px' }}>
                                    <a href="#technology" style={{ textDecoration: 'none', color: '#000000' }}>
                                        <img src='assets/images/down-arrow.svg' alt='img' height='100px' width='auto' />
                                        <span>Technology</span>
                                    </a>
                                </div> */}

                            </div>
                        </div>

                    </div>

                    <body>
                        <div></div>
                        <div className="cards" id="card1">
                            <a href='#projects' onClick={() => openCard(null)}>Close</a>
                            <div>Card 1</div>
                        </div>
                        <div className="cards" id="card2">
                            <a href='#projects' onClick={() => openCard(null)}>Close</a>
                            <div>Card 2</div>
                        </div>
                        <div className="cards" id="card3">
                            <a href='#projects' onClick={() => openCard(null)}>Close</a>
                            <div>Card 3</div>
                        </div>
                        <div className="cards" id="card4">
                            <a href='#projects' onClick={() => openCard(null)}>Close</a>
                            <div>Card 4</div>
                        </div>
                    </body>

                    <div className="small-screen-cont d-lg-none">
                        <div className="small-project-strip">
                            <div className="project-cont-small ">
                                <div className="title t-txt1-small">PROJECTS</div>
                                <div className="t-txt2-small">Our Recent Adventures</div>
                                <div className="t-txt3-small">
                                    <div className="scroll-width">
                                        <div className="card-column">
                                            {/* Card 1 */}
                                            <div className="card-cont">
                                                <div className="card">
                                                    <div className="front-card">
                                                        <div className="card-text">
                                                            Commodity Trading and Risk Management
                                                        </div>
                                                        <img src="assets/images/ask.svg" alt="img" width="auto" height="200px" />
                                                    </div>
                                                    <div className="back-card">
                                                        <img src="assets/images/project-backdiv.svg" alt="img" className="card-back"></img>
                                                        <div className="bc-txt1">Xceler.ai</div>
                                                        <div className="bc-txt2">Cloud first SaaS based contract management, planning till its fulfillment workflow driven platform. Modular and API driven for seamless data omni channel </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Card 2 */}
                                            <div className="card-cont">
                                                <div className="card">
                                                    <div className="front-card">
                                                        <div className="card-text pb-5">
                                                            Treasury
                                                        </div>
                                                        <img src="assets/images/wireframing.svg" alt="img" width="100%" height="auto" />
                                                    </div>
                                                    <div className="back-card">
                                                        <img src="assets/images/project-backdiv1.svg" alt="img" className="card-back"></img>
                                                        <div className="bc-txt1">Xceler.ai</div>
                                                        <div className="bc-txt2">Comprehensive bank cash, credit facility and investment management platform providing a discerning view to the liquidity and risk.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Card 3 */}
                                            <div className="card-cont">
                                                <div className="card">
                                                    <div className="front-card">
                                                        <div className="card-text pb-4">
                                                            Inventory Management
                                                        </div>
                                                        <img src="assets/images/security.svg" alt="img" width="100%" height="auto" />
                                                    </div>
                                                    <div className="back-card">
                                                        <img src="assets/images/project-backdiv2.svg" alt="img" width="auto" height="120px" style={{ marginBottom: '10px' }}></img>
                                                        <div className="bc-txt1">Xceler.ai</div>
                                                        <div className="bc-txt2">Seamless inventory management platform. Workflow and driven build, draw, transfer and processing of inventory.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Card 4 */}
                                            <div className="card-cont">
                                                <div className="card">
                                                    <div className="front-card">
                                                        <div className="card-text">
                                                            Taru.ag
                                                        </div>
                                                        <img src="assets/images/analytics.svg" alt="img" width="auto" height="220px" style={{ paddingLeft: '20px' }} />
                                                    </div>
                                                    <div className="back-card">
                                                        <img src="assets/images/project-backdiv3.svg" alt="img" height="150px" width="auto" style={{ marginLeft: '35px' }}></img>
                                                        <div className="bc-txt1">Taru.ag</div>
                                                        <div className="bc-txt2">Agri value chain management platform to improve farm, farmer and farming livelihood</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>
                        {/* <div className="pt-5 small-project-strip pb-5">
                            <div className="arrow-nav" style={{ width: '220px', marginLeft: '5vw' }}>
                                <a href="#technology" style={{ textDecoration: 'none', color: '#000000' }}>
                                    <img src='assets/images/down-arrow.svg' alt='img' height='100px' width='auto' />
                                    <span>Technology</span>
                                </a>
                            </div>
                        </div> */}

                    </div>
                </div>
            </body>
        </html>

    )
}
export default Products;