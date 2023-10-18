import React from "react";

import Logo from '../assets/img/logo.png';
import Social from "./Social";


const Footer = () => {
    const styleFooter = {
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: '40px',
    };
    const styleLogo = {
        width: '150px',
        marginTop: '90px',
        marginBottom: '2px',
        marginRight: '20px' ,
        padding: '0px'
    }
    return (
        <div container style={styleFooter}>
            <div className="cont">
                <img src={Logo} alt="Logo" style={styleLogo} className='logo' />
            </div>
            <Social />
        </div>
    )
}


export default Footer;