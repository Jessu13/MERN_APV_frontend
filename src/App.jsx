import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import RutaProtegida from './layout/RutaProtegida';

import Login from './paginas/Login';
import Registrar from './paginas/Registrar';
import ConfirmarCuenta from './paginas/ConfirmarCuenta';
import OlvidePassword from './paginas/OlvidePassword';
import NuevoPassword from './paginas/NuevoPassword';
import AdiministrarPacientes from './paginas/AdiministrarPacientes';
import EditarPerfil from './paginas/EditarPerfil';
import CambiarPassword from './paginas/CambiarPassword';

import { AuthProvider } from './context/AuthProvider';
import { PacientesProvider } from './context/PacientesProvider';

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <PacientesProvider>
          <Routes>
            <Route path='/' element={<AuthLayout/>}>
              <Route index element={<Login/>}/>
              <Route path='registrar' element={<Registrar></Registrar>}/>
              <Route path='olvide-password' element={<OlvidePassword></OlvidePassword>}/>
              <Route path='olvide-password/:token' element={<NuevoPassword></NuevoPassword>}/>
              <Route path='confirmar/:id' element={<ConfirmarCuenta></ConfirmarCuenta>}/>
            </Route>

            <Route path='/admin' element = {<RutaProtegida></RutaProtegida>}>
              <Route index element = {<AdiministrarPacientes></AdiministrarPacientes>}></Route>
              <Route path='perfil' element={<EditarPerfil></EditarPerfil>}></Route>
              <Route path='cambiar-password' element={<CambiarPassword></CambiarPassword>}></Route>
            </Route>
          </Routes>
        </PacientesProvider>
      </AuthProvider>
    </BrowserRouter>

  )
}

export default App
