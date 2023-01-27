import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, ListGroup, Navbar } from "react-bootstrap"
import {DatosIniciales} from "./DatosIniciales"
import { v4 as uuidv4 } from 'uuid';

const Datos = () => {
const [nombreColaborador, setNombreColaborador] = useState("")
const [correoColaborador, setCorreoColaborador] = useState("")
const [listaDatos, setListaDatos] = useState(DatosIniciales)
const [error, setError] = useState(false);
const [busqueda, setBusqueda] = useState("");

// Función al enviar el formulario
const enviarFormulario = (e) => {
e.preventDefault()

if(nombreColaborador ===''|| correoColaborador ==='')
{
setError(true);
return;
} 
setError(false)
setCorreoColaborador('')
setNombreColaborador('')
setListaDatos([...listaDatos, { id: uuidv4(), nombre:nombreColaborador, correo:correoColaborador }])
}

const capturaInputName = (e) => {
setNombreColaborador(e.target.value)
}
const capturaInputEmail = (e) => {
setCorreoColaborador(e.target.value)
}
const capturaBusqueda = (e) => {
setBusqueda(e.target.value);
}

let resultadoBusqueda = []
if (!busqueda) {
resultadoBusqueda = listaDatos
} else {
resultadoBusqueda = listaDatos.filter((colaborador) =>
colaborador.nombre.toLowerCase().includes(busqueda.toLocaleLowerCase()))
}

return (

<div className="m-5 w-50">

<Navbar className="bg-dark mb-3 p-2 d-flex justify-content-between">
<Navbar.Brand className="text-light">Buscador de colaboradores</Navbar.Brand>
<Form className="d-flex">
            <Form.Control
                type="search"
                placeholder="Busca un colaborador"
                name="busqueda"
                onChange={capturaBusqueda}
                value={busqueda}
            />
            </Form>
</Navbar>

    <Form onSubmit={enviarFormulario}>
    {error ? <p className='bg-danger text-white text-center'>!Debe Ingresar Nombre y Correo¡</p>:null}

        <Form.Label>Nombre del colaborador</Form.Label>
        <Form.Control type="text" placeholder="Ingresa el nombre del colaborador" name="nombreColaborador" value = {nombreColaborador} onChange={capturaInputName}/>

        <Form.Label className="mt-3">Correo del colaborador</Form.Label>
        <Form.Control type="email" placeholder="Ingresa correo del colaborador" name="correoColaborador" value = {correoColaborador} onChange={capturaInputEmail}/>

        <Button className="mt-3 mb-3" variant="primary" type="submit">
        Agregar colaborador
        </Button>
    </Form>
    
    <hr />

    <ListGroup>
        <h3>Listado de Colaboradores</h3>

        {resultadoBusqueda.map(dato => <ListGroup.Item 
        key={dato.id} 
        id={dato.id}>
        {dato.nombre} - {dato.correo}</ListGroup.Item> )}
    </ListGroup>
    
    </div>

    )
    }
    export default Datos

    