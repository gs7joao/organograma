import { useState } from "react";
import './index.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';

const Formulario = () => {

    const times = [
        'FullStack',
        'Front-End',
        'Back-End',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('https://github.com/gs7joao.png')

    const Salvando = (event) => {
        event.preventDefault();
        console.log("form foi submetido");
        console.log("Nome", nome);
        console.log("Cargo", cargo);
        console.log("Url Img", imagem);
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
                    itens={times}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;