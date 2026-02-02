import { Field } from "../components/Field";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { send_request } from "../functions/send_request";
import { useNavigate, useParams } from "react-router-dom";

function RegistrarDevolucao() {
    const { auth, authUser } = useContext(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const body = {
            dono: formData.get("matricula"),
            nome: formData.get("nome"),
        };

        console.log(body);
        send_request(
            `http://localhost:3000/item/register_return/${id}`,
            "PUT",
            body,
            "json",
            auth.token,
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
                    <h1 className="title">REGISTRAR DEVOLUÇÃO</h1>
                    <Field
                        name="matricula"
                        placeholder="Insira sua matricula"
                        type="text"
                    />
                    <Field
                        name="nome"
                        placeholder="Insira seu nome"
                        type="text"
                    />
                    <input
                        type="submit"
                        value="Registrar devolução"
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

export { RegistrarDevolucao };
