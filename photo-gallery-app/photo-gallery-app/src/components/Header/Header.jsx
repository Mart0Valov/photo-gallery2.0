import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/upload">Upload</NavLink>
        </div>
    );
}

export default Header;