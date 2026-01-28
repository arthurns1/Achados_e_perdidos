import { Field } from "../components/Field";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { send_request } from "../functions/send_request";
import { useNavigate } from "react-router-dom";

function Login() {
    const { auth, authUser } = useContext(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const admin = {
            login: formData.get("login"),
            senha: formData.get("senha"),
        };

        send_request("http://localhost:3000/login", "POST", admin).then(
            (res) => {
                if ("error_messages" in res) {
                    setError(res.error_messages[0]);
                } else {
                    authUser(res.token);
                    navigate("/");
                }
            },
        );
    }

    return (
        <main className="card-main">
            <section className="card">
                <form
                    className="card-body"
                    method="post"
                    onSubmit={handleSubmit}
                >
                    <h1 className="title">LOGIN</h1>
                    <Field
                        name="login"
                        placeholder="Insira seu login"
                        type="text"
                    />
                    <Field
                        name="senha"
                        placeholder="Insira sua senha"
                        type="password"
                    />
                    <input
                        type="submit"
                        value="Fazer Login"
                        className="submit-button"
                    />
                    <span
                        className="error_messages"
                        style={{ display: error.length > 0 ? "block" : "none" }}
                    >
                        {error}
                    </span>
                </form>
            </section>
        </main>
    );
}

export { Login };
