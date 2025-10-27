import ";./../styles.css";

function ListarUsuarios() {
    const [usuarios, setusuarios] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        async function fetchUsuarios() {
            try {
                const response = await api.get('/usuarios');
                setusuarios(response.data);
            } catch (error) {
                console.error('Erro ao buscar usuários:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchUsuarios();
    }, []);

    if (loading) {
        return <div>Carregando usuários...</div>;
    }

    return (
        <div className="listar-usuarios">
            <h2>Lista de Usuários</h2>
            <ul>
                {usuarios.map((usuario) => (
                    <li key={usuario.id}>{usuario.nome}</li>
                ))}
            </ul>
        </div>
    );
}

export default ListarUsuarios;