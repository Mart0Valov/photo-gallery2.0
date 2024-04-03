import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/upload">Upload</NavLink>
        </>
    );
}

export default Header;