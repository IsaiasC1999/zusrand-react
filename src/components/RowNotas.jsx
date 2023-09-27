import { useState } from "react";
import DivDropDown from "./DivDropDown";
import { useAlumnosStore } from "../store/alumnos";



function RowNotas({infoNombre,id}) {

const personas = useAlumnosStore(state =>state.personas)

const [infoNota, setinfoNota] = useState();

function mostrarNotas(id) {
  event.stopPropagation();

  const clonePersonas = structuredClone(personas);

  const indexPersonas = clonePersonas.findIndex(ele => ele.id === id)

  const infoPersona = clonePersonas[indexPersonas];

  console.log(infoPersona.materias);
  
 

}

    // console.log(infoNombre);

  return ( 
        <li> 
             {infoNombre} <button onClick={()=> mostrarNotas(id)}>Ver mas</button>
               
        </li>    
   );
}

export default RowNotas;