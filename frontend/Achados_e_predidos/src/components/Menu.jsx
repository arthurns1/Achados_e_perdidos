import { useContext } from "react";
import Logo from "../assets/Logos/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function Menu() {
    const { auth, authUser, logoutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    function render_links() {
        if ("token" in auth) {
            return (
                <ul>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/cadastrar-admin"> CADASTRAR ADMIN</Link>
                    </li>
                    <li
                        className="contorno"
                        onClick={(e) => {
                            e.preventDefault();
                            logoutUser();
                            navigate("/");
                        }}
                    >
                        LOGOUT
                    </li>
                </ul>
            );
        } else {
            return (
                <ul>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/login" className="contorno">
                            SOU ADMIN
                        </Link>
                    </li>
                </ul>
            );
        }
    }

    return (
        <menu>
            <img src={Logo} alt="Logo A&P" className="logo-menu" />
            <nav>{render_links()}</nav>
        </menu>
    );
}

export { Menu };
