import logo from '../../assets/images/logo.png';
import SocialIcons from "../socialIcons/socialIcons";
import arrowRight from '../../assets/images/icons/arrowRight.png';

function Footer() {
    return (
        <footer>
            <div className='footerLeft'>
                <img src={logo} alt={'logo'}/>
                <p>One of the best furniture agency.</p>
            </div>
            <div className='footerRight'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                <div className='inputWrapper'>
                    <input type="text" placeholder='Email Address'/>
                    <img className='arrowRight' src={arrowRight} alt={'arrow right'}/>
                </div>
                <SocialIcons/>
            </div>
        </footer>
    );
}

export default Footer;
