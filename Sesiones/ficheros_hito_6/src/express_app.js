import { Empleado } from './empleado.js';
import express from 'express';
const app = express();
var port = process.env.PORT || 8080;

app.get('/', function(req, res) {
    let empleado = new Empleado(0, "Sergio", "Vela", "sergiovp96@gmail.com");
    res.send(empleado)
})

app.listen(port, () => {
    console.log(`Ejemplo app Express corriendo en http://localhost:${port}`)
})
