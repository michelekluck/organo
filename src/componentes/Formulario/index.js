import CampoTexto from '../CampoTexto'
import DropDown from '../DropDown'
import './Formulario.css'


const Formulario = () => {

    const times = [
        'Programação', 
        'Front-end',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder='Digite seu nome'/>
                <CampoTexto label="Cargo" placeholder='Digite seu cargo'/>
                <CampoTexto label="Imagem"placeholder='Informe o endereço da imagem'/>
                <DropDown itens={times}/>
            </form>
        </section>
    )
}

export default Formulario