import Colaboradodor from '../Colabolador';
import './index.css';

const Time = (props) => {
    return (
        //Verificando se existe o time e se existir, ele retorna
        (props.colaboradores.length > 0) ? 
        <section className="time" style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}> {props.nome} </h3>
            <div className="colaboradores">
                {props.colaboradores.map( colaborador => <Colaboradodor key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} corFundo={props.corPrimaria} />)}
            </div>
        </section>
        : ''
    )
}

export default Time;