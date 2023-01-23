import logo from '../../assets/images/logo.png';

function Header() {
    return (
        <header className={'flex_box header'}>
            <img src={logo} alt={'logo'}/>
            <nav className={'flex_box'}>
                <ul className={'flex_box navBar'}>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li className={'our_terms'}>Our Teams</li>
                    <li><button>Contact Us</button></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
