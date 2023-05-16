import React from "react";
import { Container, Button, Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router";

const  RegisProd     = () => {
  const [show, setShow] = React.useState(false);
  const [formValue, setformValue] = React.useState({
    nombre: "",
    provedorfk: "",
    Preciomenudeo: "",
    Preciomayoreo: "",
    descripcion: "",
    pesoneto: "",
    
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
    formData.append("provedorfk", formValue.provedorfk);
    formData.append("Preciomenudeo", formValue.Preciomenudeo);
    formData.append("Preciomayoreo", formValue.Preciomayoreo);
    formData.append("descripcion", formValue.descripcion);
    formData.append("pesoneto", formValue.pesoneto);
   
    axios
        .post("http://localhost/proautosxpress/public/api/Rprod", formData, {
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
            console.log("Action completed");
            history("/proautosxpress/public/Vprod");
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
                <h1>Agrega un producto </h1>
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
                        <Form.Label>Provedor</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="¿Quién lo provee?"
                            name="provedorfk"
                            value={formValue.provedorfk}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Precio de venta Menudeo</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="$$$"
                            name="Preciomenudeo"
                            value={formValue.Preciomenudeo}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Precio de venta Mayoreo</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="$$$"
                            name="Preciomayoreo"
                            value={formValue.Preciomayoreo}
                            onChange={onChange}
                        />   
                         </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control
                            type="texto"
                            placeholder="¿que es?"
                            name="descripcion"
                            value={formValue.descripcion}
                            onChange={onChange}
                        /> 
                         </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Peso neto en Kg del producto</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="100, 200..."
                            name="pesoneto"
                            value={formValue.pesoneto}
                            onChange={onChange}
                        />                  
                    </Form.Group>
                    <div align="center">
                        <Button variant="primary" type="submit">
                            Agregar producto
                        </Button>
                    </div>
                    <br />
                    <br />
                </Form>
            </Container>
        </>
    );
};
export default RegisProd;