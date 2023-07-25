import './navbar.css';
import {AiFillGoogleCircle} from 'react-icons/ai';
import {BsYelp} from 'react-icons/bs';
import {GiSmartphone} from 'react-icons/gi';
import {VscTools} from 'react-icons/vsc';
function NavBar() {
    return(
        <div>
            <div className="social">
                <div className='links'>
                    <a className='link' target="_blank" rel="noreferrer" href="https://goo.gl/maps/MJKg3eEzB27pxSZk8"><AiFillGoogleCircle size={25} color="rgb(221, 61, 8)"/></a>
                    <a className='link' target="_blank" rel="noreferrer" href="https://www.yelp.com/biz/request-a-pro-rancho-cucamonga"><BsYelp size={25} color="rgb(221, 61, 8)"/></a>
                </div>
                <a className='book' href="book">Book A Service</a>
            </div>
            <div className="info">
                <p className='logo'><VscTools color='rgb(221, 61, 8)' size={25} /> Request A Pro</p>
                <p className='phone'><GiSmartphone color='rgb(221, 61, 8)' size={25} /> 909-276-5060</p>
            </div>
            <div className="tabs">
                <a href="/">Home</a>
                <a href="aboutus">About us</a>
                <a href="contact">Contact us</a>
            </div>
        </div>
    )
};

export default NavBar;