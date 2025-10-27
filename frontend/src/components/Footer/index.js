import '.styles.css';

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} - Todos os direitos reservados.
                <br /> Desenvolvido por Júlia Melissa
            </p>
        </footer>
    );
}

export default Footer;