
import './App.css'
import { useEffect, useState } from 'react';
import { useAlumnosStore } from './store/alumnos';
import DivDropDown from './components/DivDropDown';
import RowNotas from './components/RowNotas';


function App() {

  const cargarAlumnos = useAlumnosStore(state => state.cargarAlumnos)
  const personas = useAlumnosStore(state => state.personas)
  const limpiarEstado = useAlumnosStore(state => state.limpiarEstado)
  const [infoNotas, setInfoNotas] = useState(null);
  const [showNotas, setShowNotas] = useState(false);




  // console.log(personas);

  const resu = showNotas ? 'div-mostrar' : "div-ocultar"

  



  return (
    <>
      <h2>Hola amigos</h2>
      <button onClick={() => cargarAlumnos()}>Cargar</button>
      <button onClick={() => limpiarEstado()} >Limpiar</button>




      <ul>
        {personas.lenght === 0 ? "buscando" : personas.map(ele =>
          <RowNotas key={ele.id} id={ele.id} infoNombre={ele.nombre} motrarNotas={mostrarNotas} />
        )}
      </ul>




    </>
  )
}

export default App
