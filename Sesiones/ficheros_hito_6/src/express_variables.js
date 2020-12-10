import { Empleado } from './empleado.js';
import express from 'express';
const app = express();
var port = process.env.PORT || 8080;

// Ejemplo de empleado que se mostrará en la página 'index'
let empleado = new Empleado(0, "Sergio", "Vela", "sergiovp96@gmail.com");

app.get('/', function(req, res) {
    res.send(empleado)
})

app.get('/empleado', function(req, res) {
    let id = req.query.id;
    let nombre = req.query.nombre;
    let apellido = req.query.apellido;
    let email = req.query.email;

    if (id && nombre && apellido && email) {
        let nuevoEmpleado = new Empleado(id, nombre, apellido, email);
        res.send(nuevoEmpleado);
    } else {
        res.send({'error 400': 'No se han introducido los parámetros correctos.'}), 400;
    }
})

app.listen(port, () => {
    console.log(`Ejemplo app Express corriendo en http://localhost:${port}`);
})
