import './Header.css';
import headerImg from '../assets/test.jpg'


function Header() {
    return (
        <div className="Header">
            {/* header image */}
            <img src={headerImg} className="header-img" />
            {/* translucent & black box */}
            <div className="translucent-box"></div>
            {/* <text on header */}
            <div className="header-text">"I make, <br /> &emsp; therefore I am."</div>
        </div>
    );
}

export default Header;