import './CampoTexto.css'

const CampoTexto = (props) => {
    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input id='placeholder-text' placeholder={props.placeholder} />
        </div>
    )
}

export default CampoTexto