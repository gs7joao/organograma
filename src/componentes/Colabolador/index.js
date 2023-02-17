import './index.css';

// Formas de desestruturação de Props
// const Colaboradodor = (props) => {
const Colaboradodor = ({nome, cargo, imagem, corFundo}) => {
    return(
        <div className="colaborador"> 
            <div className="cabecalho" style={{backgroundColor: corFundo}}>
                <img src={imagem} alt={`Imagem do `+nome} />
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaboradodor;

