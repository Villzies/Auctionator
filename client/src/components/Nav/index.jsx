import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';

function Nav() {

    function handleLogout() {
        Auth.logout();
    }

    function showNavigation() {
        if (Auth.loggedIn()) {
            return (
                <div className="navbar">
                    <ul className="flex-row">
                        <li className="mx-1">
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li className="mx-1">
                            <Link to="/about">
                                About Us
                            </Link>
                        </li>
                        <li className="mx-1">
                            <Link to="/contact">
                                Contact Us
                            </Link>
                        </li>
                        <li className="mx-1">
                            <Link to="/" onClick={handleLogout}>
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            );
        } else {
            return (
                <div className="navbar">
                    <ul className='flex-row'>
                        <li className='mx-1'>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li className='mx-1'>
                            <Link to="/about">
                                About Us
                            </Link>
                        </li>
                        <li className='mx-1'>
                            <Link to="/contact">
                                Contact Us
                            </Link>
                        </li>
                        <li className='mx-1'>
                            <Link to="/signup">
                                Signup
                            </Link>
                        </li>
                        <li className='mx-1'>
                            <Link to='/login'>
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            );
        }
    }
    return (
        <header className='flex-row px-1'>
            <h1>
                <Link to="/">
                   <span role='img' aria-label='money bag'>💰</span>
                   Bitches Be Shopping
                </Link>
            </h1>

            {showNavigation()}
        </header>
    );
}

export default Nav;
