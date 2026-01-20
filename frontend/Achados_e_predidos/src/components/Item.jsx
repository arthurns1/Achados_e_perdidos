import { Link } from "react-router-dom";

export function Item(props) {
    return (
        <li className="item">
            <img src={props.img} alt={props.nome} />
            <div className="info">
                <h2>{props.nome}</h2>
                <span className="entrega">
                    Data de entrega: {props.entrega}
                </span>
                <ul>
                    <li
                        style={{
                            display: "token" in props.auth ? "block" : "none",
                        }}
                    >
                        <Link to={`/registro-devolucao/${props.id}`}>
                            <button className="devolucao">
                                Registrar devolução
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </li>
    );
}
