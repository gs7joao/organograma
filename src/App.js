import { useState } from "react";
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from "./componentes/Time";

function App() {

  const times = [{
      nome: 'FullStack',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },{
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },{
      nome: 'Back-End',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },{
      nome: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE9F5',
    },{
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9',
    },{
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    }
  ]


  const [colaboradores, setColaboradores] = useState([]);

  const novoColaboradorAdicionado = (colaborador) => {
    // colaborador => setColaboradores()
    // console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]); // mantem os valores antigos e adiciona os novos
  }

  return (  
    <div className="App">
        <Banner />
        <Formulario times={times.map(time => time.nome)} colaboradorCadastrado={colaborador => novoColaboradorAdicionado(colaborador)} />

        {times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria}/>)}


    </div>
  );
}

export default App;
