import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return(
        <div>
                <div className="footer">
                    <div className="footerCredit">
                        <span>Developed by b31ngD3v.</span>
                    </div>
                    <div className="footerLR">
                        <div className='footerLeft'>
                            <Link to='/Advertising'>Advertising</Link>
                            <Link to='/business'>Business</Link>
                            <Link to='/about'>About</Link>
                            <Link to='/faq'>How Search works</Link>
                        </div>
                        <div className='footerRight'>
                            <Link to='/privacy'>Privacy</Link>
                            <Link to='/terms'>Terms</Link>
                            <Link to='/settings'>Settings</Link>
                        </div>
                    </div>
                </div> 
        </div>
    );
}

export default Footer;