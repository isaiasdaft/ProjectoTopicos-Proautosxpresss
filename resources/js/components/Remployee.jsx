import React from "react";
import { Container, Button, Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router";

const  RegisEmployee    = () => {
  const [show, setShow] = React.useState(false);
  const [formValue, setformValue] = React.useState({
    name: "",
    lastname: "",
    address: "",
    position: "",
    phone: "",
    
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
    formData.append("lastname", formValue.lastname);
    formData.append("address", formValue.address);
    formData.append("position", formValue.position);
    formData.append("phone", formValue.phone);

   
    axios
        .post("http://localhost/proautosxpress/public/api/REmplo", 
        formData, {
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
            history("/proautosxpress/public/BEmplo");
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
                <h1 bg="blue">Ingresar los datos del nuevo Empleado </h1>
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
                        <Form.Label>Apellidos</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Apellido"
                            name="lastname"
                            value={formValue.lastname}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Dirección</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Domicilio"
                            name="address"
                            value={formValue.address}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Puesto de trabajo</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="puesto"
                            name="position"
                            value={formValue.position}
                            onChange={onChange}
                        />   
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Número telefónico</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="(449)"
                            name="phone"
                            value={formValue.phone}
                            onChange={onChange}
                        />   
                     </Form.Group>
                    <div align="center">
                        <Button variant="primary" type="submit">
                            Registrar Empleado
                        </Button>
                    </div>
                </Form>
            </Container>
        </>
    );
};
export default RegisEmployee;