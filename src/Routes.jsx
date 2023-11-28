import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaginaInicial from './pages/PaginaInicial';
import DetalhesArea from './pages/DetalhesArea';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<PaginaInicial/>}/>
        <Route path='/detalhesArea/:id' element={<DetalhesArea/>}/>
      </Routes>
    </BrowserRouter>
  );
}