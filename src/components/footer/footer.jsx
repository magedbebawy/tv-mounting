import React from 'react';
import './footer.css';
import {AiFillGoogleCircle} from 'react-icons/ai';
import {BsYelp} from 'react-icons/bs';

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className='footer'>
            <p> &copy;{year} - Request a pro. All Rights Reserved.</p>
            <div className='social-footer'>
                <a className='link' target="_blank" rel="noreferrer" href="https://goo.gl/maps/MJKg3eEzB27pxSZk8"><AiFillGoogleCircle size={25} color='white'/></a>
                <a className='link' target="_blank" rel="noreferrer" href="https://www.yelp.com/biz/request-a-pro-rancho-cucamonga"><BsYelp size={25} color='white'/></a>
            </div>
        </div>
    )
}

export default Footer;