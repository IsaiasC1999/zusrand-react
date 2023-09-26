
import './App.css'
import { useEffect, useState } from 'react';
import { useAlumnosStore } from './store/alumnos';


function App() {

  const cargarAlumnos = useAlumnosStore(state => state.cargarAlumnos)
  const personas = useAlumnosStore(state => state.personas)
  const limpiarEstado = useAlumnosStore(state =>state.limpiarEstado)
  const [infoNotas, setInfoNotas] = useState(null);
  


  // console.log(personas);
 
  

    function mostrarNotas(id) {
        
      const clonePersonas = structuredClone(personas);

      const indexPersonas = clonePersonas.findIndex(ele=> ele.id === id)
      
      const infoPersona = clonePersonas[indexPersonas];

      console.log(infoPersona.materias);

    }

  return (
    <>
      <h2>Hola amigos</h2>
      <button onClick={ ()=> cargarAlumnos()}>Cargar</button>
      <button onClick={()=> limpiarEstado()} >Limpiar</button>
      {/* <h3>{personas ===  ? "..." : personas[2].nombre }</h3> */}

      

      <ul>

      {personas.lenght === 0 ? "buscando" : personas.map(ele=>
          <li key={ele.id}>
                 {ele.nombre}<button onClick={()=>mostrarNotas(ele.id)} >Ver mas</button> 
          </li>
        )}
      </ul>

        {}

    </>
  )
}

export default App
