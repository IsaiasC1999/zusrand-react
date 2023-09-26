import { create } from "zustand";
import { getAllAlumnos } from "../services/alumnos"
export const useAlumnosStore = create((set) => {
  return {
    personas: [{
      "id": 1,
      "nombre": "Juan Pérez",
      "edad": 20,
      "materias": [
        {
          "nombre": "Matemáticas",
          "promedio_anual": 8.5
        },
        {
          "nombre": "Historia",
          "promedio_anual": 7.0
        },
        {
          "nombre": "Ciencias",
          "promedio_anual": 9.2
        }
      ]
    }],
    cargarAlumnos: () => {
      getAllAlumnos().then(res => set((state) => ({ personas: [...state.personas, ...res] })))
    },
    limpiarEstado: () => {
      set({ personas: [] })
    },
    

  }
})