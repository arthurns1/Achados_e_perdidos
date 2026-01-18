export function Field(props) {
    return (
        <div className="text-field">
            <label htmlFor={"i" + props.name}>{props.name}:</label> <br />
            <input
                type={props.type}
                name={props.name}
                id={"i" + props.name}
                placeholder={props.placeholder}
            />
        </div>
    );
}
