import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
    
    return (
        <div>
            <nav className='w-full bg-gray-300 py-5'>
                <ul className='w-4/5 mx-auto flex gap-10 navbarr'>
                    <Link to='/'>Home</Link>
                    <Link to='/users'>Users</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                    
                </ul>
            </nav>
        </div>
    );
};

export default Header;