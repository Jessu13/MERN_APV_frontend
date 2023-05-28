import Formulario from "../components/Formulario"
import ListadoPacientes from "../components/ListadoPacientes"
import { useState } from "react"

const AdiministrarPacientes = () => {

    const [mostrarFormulario, setMostrarFormulario] = useState(false)
  return (
    <>
        <div className="flex flex-col md:flex-row">
            <button type="button" className="bg-indigo-600 text-white font-bold uppercase mx-10 p-3 rounded-md md:hidden mb-5" onClick={() => setMostrarFormulario(!mostrarFormulario)}>
                {mostrarFormulario ? 'Ocultar Formulario' : 'Mostrar Formulario'}
            </button>
            <div className={`${mostrarFormulario ? 'block' : 'hidden' } md:block md:2-1/2 lg:w-2/5`}>
                <Formulario></Formulario>
            </div>

            <div className="md:w-1/2 lg:w-3/5">
                <ListadoPacientes></ListadoPacientes>
            </div>
        </div>
    </>
  )
}

export default AdiministrarPacientes