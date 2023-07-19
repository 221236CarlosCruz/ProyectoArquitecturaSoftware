import '../../assets/styles/TablaStyle.css'

function Tabla() {
    return (
        <div className="contenedor-rectangulo">
            <div className="tabla">
                <table>
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>No. Visitante</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>17/07/2023</td>
                            <td>21:00</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>17/07/2023</td>
                            <td>21:01</td>
                            <td>2</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Tabla;