import React from 'react';
// import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
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
    );
};

export default Navigation;
