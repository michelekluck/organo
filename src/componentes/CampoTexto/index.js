import './CampoTexto.css'

const CampoTexto = (props) => {
    console.log(props)
    return (
        <div className="campo-texto">
            <label>Nome</label>
            <input placeholder='Digite seu nome' />
        </div>
    )
}

export default CampoTexto