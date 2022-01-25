import { Link } from 'react-router-dom'

import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


function Nav() {
    return (
        <nav>
            <Link to='/' className="nav-logo"> myeongseong.kim </Link>

            <button type="button" className="nav-toggle" aria-controls="navbar-menu" aria-expanded="false">
                <FontAwesomeIcon icon={faBars} />
            </button>

            <div className="nav-menu">
                <ul>
                    <li> <Link to='/about' className='menu-item'> About </Link> </li>
                    <li> <Link to='/projects' className='menu-item'> Projects </Link> </li>
                    <li> <Link to='/contact' className='menu-item'> Contact </Link> </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;