export async function getAllAlumnos() {
   return fetch("http://localhost:5173/alumnos.json").
   then(res => res.json()).
   then(resJson =>{ return resJson }) 
   
}
