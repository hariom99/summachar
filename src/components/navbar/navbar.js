import "./navbar.css";
import brand from "../../images/brand.png"
import { NavLink } from "react-router-dom";


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
                        <li>
                            <NavLink to="/">
                                All
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/coronavirus">
                                Coronavirus
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/india">
                                India
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/world">
                                World
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/business">
                                Business
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/science-tech">
                                Science & Tech
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="politics">
                                Politics
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/sports">
                                Sports
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/trivia">
                                Trivia
                            </NavLink>
                        </li>
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