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
                                            <a href="#TradingAndRiskManagement" data-tab="TradingAndRiskManagement" onClick={() => openCard('TradingAndRiskManagement')} className="card-cont">
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
                                            <a href='#Treasury' data-tab="Treasury" onClick={() => openCard('Treasury')} className="card-cont">
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
                                            <a href='#AdvanceRiskAnalytics' data-tab="AdvanceRiskAnalytics" onClick={() => openCard('AdvanceRiskAnalytics')} className="card-cont">
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
                                            <a href='#Taru' data-tab="Taru" onClick={() => openCard('Taru')} className="card-cont">
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

                    <div className='card-style'>
                        {/* Open Card 1 */}
                        <div className="cards" id="TradingAndRiskManagement">
                            <a href='#projects' onClick={() => openCard(null)} className='card-link'>
                                <img src='assets/images/turn-back.png' alt='img' className='card-img' />
                                <span>Back</span>
                            </a>
                            {/* Open Card Content 1 */}
                            <div className='open-card-cont'>
                                <div className="open-card-header">Solutions</div>
                                <div className='open-card-flex'>
                                    <div className='open-card-row'>
                                        <div className='smaller-header'>Trading and Risk Management</div>
                                        <ul>
                                            <li>Simplify and streamline complex trading processes with Xceler’s innovative contract management system.</li>
                                            <li>Digitize contracts conveniently with smart and intuitive design.</li>
                                            <li>Seamlessly integrate with upstream and downstream applications for efficient trading.</li>
                                        </ul>
                                    </div>
                                    <div className='open-card-row'>
                                        <div className='smaller-header'>Document Management</div>
                                        <ul>
                                            <li>Generate documents effortlessly using advanced templates and data integration capabilities.</li>
                                            <li>Transmit finalized documents via email or integrate with preferred applications like Zapier, Dropbox, or Docusign. </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className='open-card-flex'>
                                    <div className='open-card-row'>
                                        <div className='smaller-header'>KYC and Compliance Check</div>
                                        <ul>
                                            <li>Transform repetitive contracts, invoices, and shipping documents into templates for quick generation and delivery.</li>
                                            <li>Revolutionize customer and vendor onboarding process with advanced AI algorithm. </li>
                                        </ul>
                                    </div>
                                    <div className='open-card-row'>
                                        <div className='smaller-header'>Operations and Logistics Management</div>
                                        <ul>
                                            <li>Increase efficiency in international trade operations and logistics with our user-friendly workbench.</li>
                                            <li>Comprehensive view of trade planning, price fixing, logistics, and invoicing in one location.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className='open-card-flex'>
                                    <div className='open-card-row'>
                                        <div className='smaller-header'>Risk Analytics and Widgets</div>
                                        <ul>
                                            <li>Oversee customer and vendor onboarding effortlessly.</li>
                                            <li>Stay informed on vendor progress through cutting-edge proprietary AI algorithms. </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Open Card 2 */}
                        <div className="cards" id="Treasury">
                            <a href='#projects' onClick={() => openCard(null)} className='card-link'>
                                <img src='assets/images/turn-back.png' alt='img' className='card-img' />
                                <span>Back</span>
                            </a>
                            {/* Open Card Content 2 */}
                            <div className='open-card-cont'>
                                <div className="open-card-header">Solutions</div>
                                <div className='open-card-text-cont'>
                                    <div className='open-card-text'>At Xceler, we pride ourselves on delivering top-of-the-line cash and liquidity management solutions. Our unique workflow system allows for secure collaboration and efficient task management, ensuring all your needs are easily met. Furthermore, Xceler simplifies bank connectivity and limit management by integrating MT940 reports, granting you access to daily cash positions and centralizing global payments and account information in one convenient location. Say goodbye to multiple access points and hello to unparalleled efficiency with Xceler.</div>
                                    <ul>
                                        <li>Constant monitoring of cash flow to cover expenses efficiently.</li>
                                        <li>Implementing hedging strategies to mitigate risks from price fluctuations.</li>
                                        <li>Adhering to regulatory standards to ensure compliance.</li>
                                        <li>Being interoperable across your finance system to display rolling liquidity.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Open Card 3 */}
                        <div className="cards" id="AdvanceRiskAnalytics">
                            <a href='#projects' onClick={() => openCard(null)} className='card-link'>
                                <img src='assets/images/turn-back.png' alt='img' className='card-img' />
                                <span>Back</span>
                            </a>
                            {/* Open Card Content 3 */}
                            <div className='open-card-cont'>
                                <div className="open-card-header">Solutions</div>
                                <div className='open-card-text-cont'>
                                    <div className='open-card-text'>Take advantage of Xceler’s versatile platform, equipped with powerful computations such as VAR, stress testing, and portfolio simulations. Enjoy the added perk of personalized derivative pricing models, tailored for complex products like accumulators, barrier options, and Asians.</div>
                                    <ul>
                                        <li>Industry-Specific Risk Analytics</li>
                                        <li>Modular & Scalable for Large Computation</li>
                                        <li>API's based plugins for Cross-Platform Access</li>
                                        <li>Validated Modelling</li>
                                        <li>Consulting & Approach Solution</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Open Card 4 */}
                        <div className="cards" id="Taru">
                            <a href='#projects' onClick={() => openCard(null)} className='card-link'>
                                <img src='assets/images/turn-back.png' alt='img' className='card-img' />
                                <span>Back</span>
                            </a>
                            {/* Open Card Content 4 */}
                            <div className='open-card-cont'>
                                <div className="open-card-header">Solutions</div>
                                <div className='open-card-text-cont'>
                                    <div className='open-card-text'>With cutting-edge technology and data-driven insights, we equip farmers with the necessary resources to make informed decisions, enhance productivity, and optimize yields.  From crop planning and cultivation to harvesting, processing, and distribution, we enhance every stage of the agricultural value chain. Our platform grants access to valuable information on weather patterns, soil health, crop diseases, and market trends, empowering farmers to embrace sustainable farming practices and effectively mitigate potential risks. </div>
                                </div>
                            </div>
                        </div>
                    </div>

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