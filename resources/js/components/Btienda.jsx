import React, { useState } from 'react';
import { Container, Button, Form, Table } from 'react-bootstrap';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert'

function Buscar() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    id: '',
    nombre: '',
    direccion: '',
    CP: '',
    tipo: '',
    ima: '',
    arribo: ''

  })
  const [tienda, setautor] = useState([])

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.get('api/Btienda', 
    {
      params: {
        nombre: data.nombre,
      },
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },

    }).then(response => {
        if (response.data[0] != null) {
          setautor(response.data)
          console.log(tienda)
        } else {
          tienda.id = ""
          tienda.nombre = ""
          tienda.direccion = ""
          tienda.tipo = ""
          tienda.ima = ""
          tienda.arribo = ""
          setShow(true)
        }
      })
      .catch(error => {
        setShow(true)
      })
  }
  return (

    <div >
      <div id="formContent">
        <div className="fadeIn first">
          <center>
            <h2>Busqueda por nombre</h2>
          </center>
        </div>
      </div>
      <Container>

        <Alert show={show} variant="danger" onClose={() => setShow(false)} dismissible>
          <center><Alert.Heading>No se pudo encontrar</Alert.Heading>
            <p>
              Verifica tus datos, no se logro encontrar tus datos.
              <br />
              Intenta con un nombre distinto registrado.
            </p></center>
        </Alert>
        <Form.Group>
          <br />
          <center>
            <Form.Label>Buscando por nombre a :</Form.Label>
            <Form.Control type="text" name="nombre" placeholder="nombre" onChange={handleInputChange} />
            <Button variant="dark" size="sm" block onClick={handleSubmit}>Search</Button>
          </center>
        </Form.Group>
        <hr />
        <Table striped bordered hover show="false" variant='secondary'>
          <thead>
            <tr>
              <th>id</th>
              <th>nombre</th>
              <th>direccion</th>
              <th>CP</th>
              <th>tipo</th>
              <th>ima</th>
              <th>arribo</th>
            </tr>
          </thead>
          {tienda.map(dataItem => (
            <tbody key={dataItem.id}>
              <tr>
                <th>{dataItem.id}</th>
                <th>{dataItem.nombre}</th>
                <th>{dataItem.direccion}</th>
                <th>{dataItem.CP}</th>
                <th>{dataItem.tipo}</th>
                <th>{dataItem.ima}</th>
                <th>{dataItem.arribo}</th>
              </tr>
            </tbody>
          ))}
        </Table>
      </Container>
    </div>
  )
}
export default Buscar;

