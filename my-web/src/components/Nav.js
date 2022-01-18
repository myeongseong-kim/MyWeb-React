import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


function Nav() {
    return (
        <div className="Nav">
            <div className="nav-logo"> myeongseong.kim </div>

            <button type="button" className="nav-toggle" aria-controls="navbar-menu" aria-expanded="false">
                <FontAwesomeIcon icon={faBars} />
            </button>

            <div className="nav-menu">
                <ul>
                    <li> About </li>
                    <li> Projects </li>
                    <li> Contact </li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;