import '../../assets/styles/FormularioLogin.css'
import Acendia from '../../assets/images/fotoacendia.jpg'


function FormularioLogin() {
    return (
        <>
            <div className="login-form">
                <h2>¡Bienvenido a Acendia!</h2>
                <input type="text" placeholder="Usuario" />
                <input type="password" placeholder="Contraseña" />
                <button>Iniciar Sesión</button>
                <img src={Acendia} className='imagenLogo1'/>
            </div>
        </>
    );
}

export default FormularioLogin;