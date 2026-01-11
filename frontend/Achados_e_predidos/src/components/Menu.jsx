import Logo from "../assets/Logos/logo.png";
import { Link } from "react-router-dom";

function Menu() {
    return (
        <menu>
            <img src={Logo} alt="Logo A&P" className="logo-menu" />
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
        </menu>
    );
}

export { Menu };
