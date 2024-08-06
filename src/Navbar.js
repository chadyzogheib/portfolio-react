import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="left">
                <a href="/" className="logo">
                    Chady Zogheib
                </a>
            </div>
            <div className="center">
                <ul className="nav-links">
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/experience">Experience</a>
                    </li>
                    <li>
                        <a href="/skills">Skills</a>
                    </li>
                    <li>
                        <a href="/projects">Projects</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="right">
                
            </div>
        </nav>
    );
}

export default Navbar;