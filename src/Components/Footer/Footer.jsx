import React from "react";
import './Footer.css'

function Footer () {
    return (
        <div className="main-container-foot">
            <div className="main-container-subscribe">
                <h3>Subscribe</h3>
                <input className='input-sub' placeholder='Enter your EMAIL for Updates'/>
                <button className='sub-btn'>Sign Up</button>
            </div>
            <div className="main-container-footer">
                <div className='main-container-footer-one'>
                    <h3>LOGO</h3>
                    <h3>Download App for easy order.</h3>
                    <h5>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</h5>
                </div>
                <div className='main-container-footer-two'>
                    <div className='main-container-footer-two-about'>About Us</div>
                    <div className='main-container-footer-two-blog'>Blog</div>
                    <div className='main-container-footer-two-working'>Working</div>
                    <div className='main-container-footer-two-food'>Food</div>
                    <div className='main-container-footer-two-delivery'>delivery</div>
                    <div className='main-container-footer-two-process'>Process</div>
                </div>
                <div className='main-container-footer-three'>
                    <div className='main-container-footer-three-about'>About Us</div>
                    <div className='main-container-footer-three-blog'>Blog</div>
                    <div className='main-container-footer-three-working'>Working</div>
                    <div className='main-container-footer-three-food'>Food</div>
                    <div className='main-container-footer-three-delivery'>delivery</div>
                    <div className='main-container-footer-three-process'>Process</div>
                </div>
                <div className='main-container-footer-four'>
                    <div className='main-container-footer-four-gethelp'>Get Help</div>
                    <div className='main-container-footer-four-blog'>Blog</div>
                    <div className='main-container-footer-four-working'>Working</div>
                    <div className='main-container-footer-four-food'>Food</div>
                    <div className='main-container-footer-four-delivery'>delivery</div>
                    <div className='main-container-footer-four-process'>Process</div>
                </div>
            </div>
            <div className="main-container-copyright">
                <div className="main-container-copyright-left">
                    <h3>Copyright @ All rights Reserved</h3>
                </div>
                <div className="main-container-copyright-right">
                    <h3>MasterCard</h3>
                    <h3>VISA</h3>
                    <h3>Rupay</h3>
                </div>
            </div>
        </div>
    )
}

export default Footer;