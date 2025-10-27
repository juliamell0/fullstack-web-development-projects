import './styles.css';
import  { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header-container">
            <div classname="logo">Gerenciamento de Usuários</div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/cadastro">Cadastrar</Link>
                <Link to="/Listar">Listar Usuários</Link>
                
            </nav>
        </header>
    );
}

export default Header;