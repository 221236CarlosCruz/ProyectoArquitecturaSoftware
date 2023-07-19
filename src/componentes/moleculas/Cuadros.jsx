import '../../assets/styles/CuadrosStyle.css'

function Cuadros() {
    return (
        <div className="contenedor-cuadro">
            <div className="cuadro">
                <div className="textoCuadro1">57</div>
                <div className="textoCuadro2">VISITANTES</div>
            </div>

            <div className="cuadro">
                <div className="textoCuadro1">10 AM</div>
                <div className="textoCuadro2">HORARIO DE MAYOR FLUJO</div>
            </div>

            <div className="cuadro">
                <div className="textoCuadro1">10%</div>
                <div className="textoCuadro2">CAPACIDAD</div>
            </div>
        </div>
    );
}

export default Cuadros;