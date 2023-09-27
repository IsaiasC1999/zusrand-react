import { useState } from "react"; 
import '../App.css' 
function DivDropDown({infoNotas,showNotasG}) {

  const [showNotas, setShowNotas] = useState(false);
  
  const resu = showNotasG ? 'div-mostrar' : "div-ocultar"


  return ( 
    <div className={`${resu}`}>
        {infoNotas[0].nombre} - {infoNotas[0].promedio_anual}
    </div>
   );
}

export default DivDropDown;