import './index.css';

const Botao = (props) => {
    //Realizando o props.children todo elemento dentro do botão é passado.
    return (
        <button className="botao">{props.children}</button>
    )
}

export default Botao