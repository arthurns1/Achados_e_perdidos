import { Field } from "../components/Field";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { send_request } from "../functions/send_request";
import { useNavigate } from "react-router-dom";

function CadastrarAdmin() {
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { auth, userAuth } = useContext(AuthContext);

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const admin = {
            login: formData.get("login"),
            senha: formData.get("senha"),
        };

        send_request(
            "http://localhost:3000/admin/create",
            "POST",
            admin,
            "json",
            auth,
        ).then((res) => {
            if ("error" in res) {
                setError(res.error);
            } else navigate("/");
        });
    }

    return (
        <main className="card-main">
            <section className="card">
                <form
                    className="card-body"
                    method="post"
                    onSubmit={handleSubmit}
                >
                    <h1 className="title">CADASTRAR</h1>
                    <Field
                        name="login"
                        placeholder="Insira o login do novo admin"
                        type="text"
                    />
                    <Field
                        name="senha"
                        placeholder="Insira a senha do novo admin"
                        type="password"
                    />
                    <input
                        type="submit"
                        value="Cadastrar admin"
                        className="submit-button"
                    />
                    <span className="error_messages">{error}</span>
                </form>
            </section>
        </main>
    );
}

export { CadastrarAdmin };
