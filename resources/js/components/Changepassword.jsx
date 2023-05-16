import React from "react";
import { Button, Container, Form, Alert } from "react-bootstrap";

import axios from "axios";
import { useNavigate } from "react-router";
const ChangePassword = () => {
    const [show, setShow] = React.useState(false);
    const [formValue, setformValue] = React.useState({
        email: "",
        newPassword: "",
    });
    let history = useNavigate();

    const onChange = (e) => {
        e.persist();
        setformValue({ ...formValue, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        if (e && e.preventDefault()) e.preventDefault();

        const formData = new FormData();
        formData.append("email", formValue.email);
        formData.append("newPassword", formValue.newPassword);
        axios
            .post(
                "http://localhost/proautosxpress/public/api/ChangePassword",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Accept: "application/json",
                    },
                }
            )
            .then((response) => {
                console.log("response:");
                console.log(response);
                history("/proautosxpress/public/LoginForm");
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
                        No se pudo realizar la actualización
                    </Alert.Heading>
                    <p>Verifica que tus datos sean correctos...</p>
                </center>
            </Alert>
            <Container>
                <br />
                <br />
                <h1>Actualiza tu contraseña</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={formValue.email}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Nueva contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name="newPassword"
                            value={formValue.newPassword}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <div align="center">
                        <Button variant="secondary" type="submit">
                            Actualizar contraseña
                        </Button>
                    </div>
                </Form>
            </Container>
        </>
    );
};
export default ChangePassword;