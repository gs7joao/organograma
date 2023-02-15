import "./index.css"

const CampoTexto = (props) => {
    const digitando = (event) => {
        props.alterado(event.target.value)
    }

    return (
        <div className="campo-texto" > 
            <label> {props.label} </label>
            <input
                value={props.valor} 
                onChange={digitando} 
                required={props.obrigatorio} 
                placeholder={`${props.placeholder}...`}
            />
        </div>
    )
}

export default CampoTexto