import { Field } from "../components/Field";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { send_request } from "../functions/send_request";
import { useNavigate } from "react-router-dom";

function CadastroItem() {
    const { auth, authUser } = useContext(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        send_request(
            "http://localhost:3000/item/create",
            "POST",
            formData,
            "",
        ).then((res) => {
            if ("error_message" in res) {
                setError(res.error[0]);
            } else {
                navigate("/");
            }
        });
    }

    return (
        <main className="card-main">
            <section className="card">
                <form
                    className="card-body"
                    method="post"
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                >
                    <h1 className="title">CADASTRO DE ITEM</h1>
                    <Field
                        name="foto"
                        placeholder="Insira sua foto"
                        type="file"
                    />
                    <Field
                        name="nome"
                        placeholder="Insira o nome do item"
                        type="text"
                    />
                    <input
                        type="submit"
                        value="Adicionar item"
                        className="submit-button"
                    />
                    <span className="error_messages">{error}</span>
                </form>
            </section>
        </main>
    );
}

export { CadastroItem };
