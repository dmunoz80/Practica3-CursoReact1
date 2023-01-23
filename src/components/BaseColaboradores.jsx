import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, ListGroup, Navbar } from "react-bootstrap"
import {DatosIniciales} from "./DatosIniciales"

const Datos = () => {
const [nombreColaborador, setNombreColaborador] = useState("")
const [listaDatos, setListaDatos] = useState(DatosIniciales)
// Función al enviar el formulario
const enviarFormulario = (e) => {
e.preventDefault()
setListaDatos([...listaDatos, { nombre: nombreColaborador}])
}
const capturaInput = (e) => {
    setNombreColaborador(e.target.value)
    }
    return (
    
<div className="m-5 w-50">

<Navbar className="bg-dark">
<Navbar.Brand>Buscador de colaboradores</Navbar.Brand>
<Form className="d-flex">
            <Form.Control
                type="search"
                placeholder="Search"
            />
            </Form>
</Navbar>

    <Form onSubmit={enviarFormulario}>
        <Form.Label>Nombre del colaborador</Form.Label>
        <Form.Control type="text" placeholder="Ingresa el nombre del colaborador" name="nombreColaborador" onChange={capturaInput} />

        <Form.Label className="mt-3">Correo del colaborador</Form.Label>
        <Form.Control type="email" placeholder="Ingresa correo del colaborador" />

        <Button className="mt-3 mb-3" variant="primary" type="submit">
        Agregar colaborador
        </Button>
    </Form>
    
    <hr />

    <ListGroup>
        <h3>Listado de Colaboradores</h3>
        {listaDatos.map(tarea => <ListGroup.Item key={tarea.nombre}>
        {tarea.nombre}</ListGroup.Item> )}
        </ListGroup>
    
    </div>

    )
    }
    export default Datos