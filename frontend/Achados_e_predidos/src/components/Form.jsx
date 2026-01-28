import { Card } from "./Card";

export function Form({ children, title, onSubmit, error }) {
    console.log(error);
    return (
        <Card>
            <form
                className="card-body"
                method="post"
                onSubmit={onSubmit}
                encType="multipart/form-data"
            >
                <h1 className="title">{title}</h1>
                {children}
                <input
                    type="submit"
                    value="Adicionar item"
                    className="submit-button"
                />
                <span
                    className="error_messages"
                    style={{ display: error.length > 0 ? "block" : "none" }}
                >
                    {error}
                </span>
            </form>
        </Card>
    );
}
