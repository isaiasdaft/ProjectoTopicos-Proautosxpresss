import React from "react";
import { Container, Button, Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router";

const RegistrarP = () => {
  const [show, setShow] = React.useState(false);
  const [formValue, setformValue] = React.useState({
    name: "",
    descripcion: "",
    productosK: "",
    hora: "",
    
});
let history = useNavigate();

const onChange = (e) => {
    e.persist();
    setformValue({ ...formValue, [e.target.name]: e.target.value });
};
const handleSubmit = (e) => {
    if (e && e.preventDefault()) e.preventDefault();

    const formData = new FormData();
    formData.append("name", formValue.name);
    formData.append("descripcion", formValue.descripcion);
    formData.append("productosK", formValue.productosK);
    formData.append("hora", formValue.hora);
   
    axios
        .post("http://localhost/proautosxpress/public/api/RProv", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Accept: "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        )
        .then((response) => {
            console.log("response:");
            console.log(response);
            console.log("Action completed :D");
            history("/proautosxpress/public/BProv");
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
                <h1>Agrega un nuevo Provedor </h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nombre"
                            name="name"
                            value={formValue.name}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="¿Qué es el producto?"
                            name="descripcion"
                            value={formValue.descripcion}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Producto clave</Form.Label>
                        <Form.Control
                            type="texto"
                            placeholder="Producto mas reconocido"
                            name="productosK"
                            value={formValue.productosK}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Nombre de contacto</Form.Label>
                        <Form.Control
                            type="texto"
                            placeholder="Contacto"
                            name="hora"
                            value={formValue.hora}
                            onChange={onChange}
                        />                    
                    </Form.Group>
                    <div align="center">
                        <Button variant="primary" type="submit">
                            Agregar proveedor
                        </Button>
                    </div>
                </Form>
            </Container>
        </>
    );
};
export default RegistrarP;