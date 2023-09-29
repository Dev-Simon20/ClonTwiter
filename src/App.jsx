import { useState } from 'react';
import { useState } from 'react';
import './App.css'

import TwiterCard from './assets/componentes/TwiterCard';


function App() {

// Pasando una funcion Como props
  const formatUserName=(name)=>`@${name}`

  const [usuario,setUsuario]=useState([]);
  return (
    <>
    <TwiterCard isFollow format={formatUserName} nombre={'Jeampierk Simon Contreras'} correo={'jeanpierks6'}/>
    <TwiterCard isFollow format={formatUserName} nombre={'Frank Simon Contreras'} correo={'frankSimon'}/>
    </>

// Practica que no es muy recomendada
// const jean={isFollow:true,format:formatUserName,nombre:'Jeampierk Simon Contreras',correo:'jeanpierks6'}
// const frank={isFollow:true,format:formatUserName,nombre:'Frank Simon Contreras',correo:'frankSimon'}
// return (
//   <>
//   <TwiterCard {...jean}/>
//   <TwiterCard {...frank}/>
//   </>
// );

  );
}

export default App;
