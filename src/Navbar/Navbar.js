import './Navbar.css'

const Navbar=()=>{
    return(
        <>
            <nav id="navbar">
                <img id="logo" src="./images/logo.png" alt="logo_image"></img>
                <div id="hamburger-icon">
                    <span className="lines"></span>
                    <span className="lines"></span>
                    <span className="lines"></span>
                </div>
                <nav>
                    <ul>
                        <li><a id="links" href="">Services<img id="down-arrow" src="./images/down-arrow.png"></img></a></li>
                        <li><a href="">Careers</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href=""><img id="search-image" src="./images/search.png"></img></a></li>
                    </ul>
                </nav>
            </nav>
        </>
    );
}
export default Navbar;