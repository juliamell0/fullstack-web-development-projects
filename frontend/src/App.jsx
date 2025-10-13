import { Routes, Route } from 'react-router-dom';

// Imports das páginas e componentes
import Header from './components/Header'
import HomePage from './pages/HomePage'

import ListaUsuariosPage from './pages/ListaUsuariosPage'
import Footer from './components/Footer'

// Importando o container de notificações do react-toastify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import CadastroPage from './pages/Cadastropage';

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cadastro" element={<CadastroPage />} />
          <Route path="/lista" element={<ListaUsuariosPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App