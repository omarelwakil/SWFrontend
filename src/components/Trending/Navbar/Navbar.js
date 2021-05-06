import './Navbar.css'

const Navbar = () => {
    return (
        <nav data-testid="navbartest" className="custom-navbar">
            <div className="custom-container">
                <ul className="custom-navbar-ul">
                    {/* Link instead of a */}
                    <li><a href="/explore">Explore</a></li>
                    <li><a href="/photos/tags" className="selected">Trending</a></li>
                </ul>
            </div>
        </nav>

    );
}

export default Navbar;
