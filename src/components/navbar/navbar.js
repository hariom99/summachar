import "./navbar.css";
import brand from "../../images/brand.png"



const Navbar = () => {
    return (
        <div className="navbar-container" >
            <div className="brand-container" >
                <div className="brand" >
                    <img className="brand-img" src={brand} alt="brand_image" />
                </div>
                <div className="search-box" >
                    <input className="search-box-head" type="text" placeholder="Search" />
                    <i className="fa fa-search search-icon " aria-hidden="true"></i>
                </div>
            </div>
            <div className="navlink-container-parent" >
                <div className="navlink-container" >
                    <ul className="navlinks" >
                        <li>All</li>
                        <li>Coronavirus</li>
                        <li>India</li>
                        <li>World</li>
                        <li>Business</li>
                        <li>Science & Tech</li>
                        <li>Politics</li>
                        <li>Sports</li>
                        <li>Trivia</li>
                        <li>
                            <select className="more-links" >
                                <option>More </option>
                                <option>opt 2</option>
                                <option>opt 3</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Navbar;