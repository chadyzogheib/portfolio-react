import './style/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
                <ul className="nav-links">
                    <li className='text'>
                        <a href="#">About</a>
                    </li>
                    <li className='text'>
                        <a href="#experience">Experience</a>
                    </li>
                    <li className='text'>
                        <a href="#skills">Skills</a>
                    </li>
                    <li className='text'>
                        <a href="#projects">Projects</a>
                    </li>
                    <li className='text'>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
        </nav>
    );
}

export default Navbar;