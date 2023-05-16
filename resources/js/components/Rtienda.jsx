import React from "react";
import { Container, Button, Form, Alert } from "react-bootstrap";

import { useNavigate } from "react-router";

const RegistrarT = () => {
  const [show, setShow] = React.useState(false);
  const [formValue, setformValue] = React.useState({
    nombre: "",
    direccion: "",
    CP: "",
    tipo: "",
    ima:"",
    arribo: ""
});
let history = useNavigate();

const onChange = (e) => {
    e.persist();
    setformValue({ ...formValue, [e.target.name]: e.target.value });
};
const handleSubmit = (e) => {
    if (e && e.preventDefault()) e.preventDefault();

    const formData = new FormData();
    formData.append("nombre", formValue.nombre);
    formData.append("direccion", formValue.direccion);
    formData.append("CP", formValue.CP);
    formData.append("tipo", formValue.tipo);
    formData.append("ima", formValue.ima);
    formData.append("arribo", formValue.arribo);

    axios
        .post("http://localhost/proautosxpress/public/api/Rtienda", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Accept: "application/json",
                },
            }
        )
        .then((response) => {
            console.log("response:");
            console.log(response);
            console.log("Action completed :D");
            
        })
        .catch((error) => {
            console.log(error);
            setShow(true);
        });
};
    return (
        <>         
            <Alert
                show={show}
                variant="danger"
                onClose={() => setShow(false)}
                dismissible
            >
                <center>
                    <Alert.Heading>
                        No se pudo realizar el registro
                    </Alert.Heading>
                    <p>Verifica si los datos son correctos...</p>
                </center>
            </Alert>
            <Container>
                <br />
                <br />
                <h1>Agrega una nueva  tienda </h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nombre"
                            name="nombre"
                            value={formValue.nombre}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Direccion</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="1234 Main St "
                            name="direccion"
                            value={formValue.direccion}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Codigo Postal</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Codigo Postal"
                            name="CP"
                            value={formValue.CP}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Tipo de tienda</Form.Label>
                        <Form.Control
                            type="texto"
                            placeholder="Abarrotes, supermercado..."
                            name="tipo"
                            value={formValue.tipo}
                            onChange={onChange}
                        />
                        </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>IMA</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="jpg"
                            name="ima"
                            value={formValue.ima}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Hora estimada de arribo</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="2021-01-27 02:16:20"
                            name="arribo"
                            value={formValue.arribo}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <div align="center">
                        <Button variant="primary" type="submit">
                            Agregar tienda
                        </Button>
                    </div>
                </Form>
            </Container>
        </>
    );
};
export default RegistrarT;