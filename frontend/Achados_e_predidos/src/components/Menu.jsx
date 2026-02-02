import { useContext, useState } from "react";
import Logo from "../assets/Logos/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import BurguerMenu from "../assets/images/burger-menu-svgrepo-com.svg";

function Menu() {
    const { auth, authUser, logoutUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [display, setDisplay] = useState("none");

    function show_hamburguer() {
        if (window.innerWidth <= 1000) {
            return (
                <>
                    <img
                        src={BurguerMenu}
                        alt="burguer-menu"
                        className="burguer-menu"
                        onClick={() => {
                            setDisplay(display === "none" ? "block" : "none");
                        }}
                    />
                    {render_links(display)}
                </>
            );
        } else {
            return render_links("block");
        }
    }

    function render_links(display) {
        if ("token" in auth) {
            return (
                <nav style={{ display }}>
                    <ul>
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/cadastrar-admin">CADASTRAR ADMIN</Link>
                        </li>
                        <li>
                            <Link to={"/devolucoes"}>DEVOLUÇÕES</Link>
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
                </nav>
            );
        } else {
            return (
                <nav style={{ display }}>
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
                </nav>
            );
        }
    }

    return (
        <menu>
            <img src={Logo} alt="Logo A&P" className="logo-menu" />
            {show_hamburguer()}
        </menu>
    );
}

export { Menu };
