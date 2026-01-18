import { Link } from "react-router-dom";
import { Item } from "../components/Item";
import { send_request } from "../functions/send_request";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

function Home() {
    const [itens, setItens] = useState([]);
    const { auth, userAuth } = useContext(AuthContext);

    useEffect(() => {
        send_request("http://localhost:3000/item/get_all", "GET").then(
            (res) => {
                if (res.results.length != 0) {
                    setItens(
                        <ul className="itens">
                            {res.results.map((item) => {
                                return (
                                    <Item
                                        img={
                                            "http://localhost:3000/upload/" +
                                            item.foto
                                        }
                                        nome={item.nome}
                                        entrega={item.data_criacao}
                                        key={item.id_item}
                                    />
                                );
                            })}
                        </ul>,
                    );
                } else {
                    setItens(<h2>Não existem itens guardados</h2>);
                }
            },
        );
    });

    function render_adicionar_button() {
        if ("token" in auth) {
            return (
                <div className="Adicionar Item">
                    <Link to="cadastro-item">
                        <button className="adicionar">Adicionar item</button>
                    </Link>
                </div>
            );
        }
    }

    return (
        <main>
            <h1>Itens guardados:</h1>
            {render_adicionar_button()}
            {itens}
        </main>
    );
}

export { Home };
