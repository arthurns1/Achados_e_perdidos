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
                    setItens(res.results);
                }
            },
        );
    }, []);

    function render_adicionar_button() {
        if ("token" in auth) {
            return (
                <div className="adicionar-item">
                    <Link to="cadastro-item">
                        <button className="adicionar">Adicionar item</button>
                    </Link>
                </div>
            );
        }
    }

    function render_itens() {
        if (itens.length > 0) {
            return (
                <ul className="itens">
                    {itens.map((item) => {
                        return (
                            <Item
                                img={
                                    "http://localhost:3000/upload/" + item.foto
                                }
                                nome={item.nome}
                                entrega={item.data_criacao}
                                key={item.id_item}
                                id={item.id_item}
                                auth={auth}
                            />
                        );
                    })}
                </ul>
            );
        } else {
            return <h2>Não foram encontrados itens guardados</h2>;
        }
    }

    return (
        <main>
            <h1>Itens guardados:</h1>
            {render_adicionar_button()}
            {render_itens()}
        </main>
    );
}

export { Home };
