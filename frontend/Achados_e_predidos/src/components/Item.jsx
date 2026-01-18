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
                    <li>
                        <button className="devolucao">
                            Registrar devolução
                        </button>
                    </li>
                    <li>
                        <button className="editar">Editar item</button>
                    </li>
                </ul>
            </div>
        </li>
    );
}
