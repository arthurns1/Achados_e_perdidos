import { Link } from "react-router-dom";
import { send_request } from "../functions/send_request";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ItemDevolvido } from "../components/ItemDevolvido";

function Devolucoes() {
    const [itens, setItens] = useState([]);
    const { auth, userAuth } = useContext(AuthContext);

    useEffect(() => {
        send_request("http://localhost:3000/item/get_all_returned", "GET").then(
            (res) => {
                if (res.results.length != 0) {
                    setItens(res.results);
                }
            },
        );
    }, []);

    function render_itens() {
        if (itens.length > 0) {
            return (
                <ul className="itens">
                    {itens.map((item) => {
                        console.log(item);
                        return (
                            <ItemDevolvido
                                img={
                                    "http://localhost:3000/upload/" + item.foto
                                }
                                nome={item.nome}
                                entrega={item.data_criacao}
                                nome_dono={item.nome_dono}
                                matricula={item.dono}
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
            <h1>Itens Devolvidos:</h1>
            {render_itens()}
        </main>
    );
}

export { Devolucoes };
