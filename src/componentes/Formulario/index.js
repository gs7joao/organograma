import { useState } from "react";
import './index.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('https://github.com/gs7joao.png')
    const [time, setTime] = useState('');

    const Salvando = (event) => {
        event.preventDefault();
        props.colaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        });
    }

    return (
        <section className="formulario">
            <form onSubmit={Salvando}>
                <h2> Preencha os dados para criar o card do colaborador </h2>
                <CampoTexto 
                    obrigatorio={true}
                    label="Nome" 
                    placeholder="Digite o seu nome"
                    valor={nome}
                    alterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite o seu cargo"
                    valor={cargo}
                    alterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                    label="Url Imagem" 
                    placeholder="Informe o endereço da imagem"
                    valor={imagem}
                    alterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.times}
                    valor={time}
                    alterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;