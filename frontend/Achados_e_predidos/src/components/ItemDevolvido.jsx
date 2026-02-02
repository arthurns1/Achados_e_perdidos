import { useNavigate } from "react-router-dom";
import { send_request } from "../functions/send_request";

export function ItemDevolvido(props) {
    const navigate = useNavigate();

    function handleRemover() {
        console.log(props.auth.token);
        send_request(
            "http://localhost:3000/item/delete/" + props.id,
            "DELETE",
            null,
            "",
            props.auth.token,
        ).then((res) => {
            navigate("/");
        });
    }

    return (
        <li className="item">
            <img src={props.img} alt={props.nome} />
            <div className="info">
                <h2>{props.nome}</h2>
                <ul className="info-devolvido">
                    <li>
                        Matrícula do dono: <br /> {props.matricula}
                    </li>
                    <li>
                        Nome do dono: <br />
                        {props.nome_dono}
                    </li>
                </ul>
                <div>
                    <button className="remover" onClick={handleRemover}>
                        Remover
                    </button>
                </div>
            </div>
        </li>
    );
}
