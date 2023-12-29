import React from 'react';
// import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='d-none d-lg-block'>
            <div className="cont">
                <div>
                    <a href="#home"><img src="assets/images/logo-portrait.png" alt="logo" height="100px" style={{ margin: '10px 0px' }} /></a>
                    <a href="#work" className="nav">Work</a>
                    <a href="#team" className="nav">Team</a>
                    <a href="#careers" className="nav">Careers</a>
                    <a href="#company" className="nav">Company</a>
                    <a href="#contact" className="nav">Contact</a>
                </div>
            </div>

            <div className='right-nav'>
                <div className='collapsible'>
                    <div className='collapsible-header'>
                        <img src='assets/images/collapsible-arrow.svg' alt='img' height="auto" width="50px" className='arrow-img'/>
                    </div>
                    <div className='collapsible-content'>
                        <a href="https://www.xceler.ai/" target="_blank" className='img-link'>
                            <img src='assets/images/xceler.png' alt='img' width="200px" height="auto" />
                        </a>
                        <div className='link-description pb-3'>Xceler.ai</div>

                        <a href="https://taru.ag/" target="_blank" className='img-link'>
                            <img src='assets/images/taru.png' alt='img' width="200px" height="auto" />
                        </a>
                        <div className='link-description' style={{marginBottom: '-20px'}}>Taru.ag</div>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default Navigation;
