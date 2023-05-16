import React from "react";
import { Button, Container, Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
    let navigate = useNavigate();
    const [show, setShow] = React.useState(false);

    const [formValue, setformValue] = React.useState({
        email: "",
        password: "",
    });

    const {email, password} = formValue;

    const onChange = (e) => {
        e.persist();
        setformValue({ ...formValue, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        if (e && e.preventDefault()) e.preventDefault();

        const formData = new FormData();
        formData.append("email", formValue.email);
        formData.append("password", formValue.password);
        formData.append("accessToken", formValue.accessToken);
        console.log(formValue.password);

        axios
            .post(
                "http://localhost/proautosxpress/public/api/login",
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Accept': 'application/json',
                        'Authorization': 'Bearer ' 
                    },
                }
            )
            .then((response) => {
                console.log("response:");
                console.log(response);
                localStorage.setItem('token', response.data.data.token);
                localStorage.setItem('correo', formValue.email )
                navigate("/proautosxpress/public/");
                
            })
            .catch((error) => {
                console.log(error);
                if (formValue.password == "empleado") {
                    axios
                        .post(
                            "http://localhost/proautosxpress/public/api/",
                            formData,
                            {
                                headers: {
                                    "Content-Type": "multipart/form-data",
                                    Accept: "application/json",
                                },
                            }
                        )
                        .then((response) => {
                            if (response.data[0].email == formValue.email) {
                                console.log("response:");
                                console.log(response);
                                navigate("/proautosxpress/public/");
                                localStorage.setItem('token', response.data.data.token);
                            }
                        })
                        .catch((error) => {
                            console.log(error);
                            setShow(true);
                        });
                } else if (
                    formValue.password == "123456789" &&
                    formValue.email == "admin@proautosxpress.com"
                ) {
                    navigate("/proautosxpress/public/");
                    localStorage.setItem('token', response.data.data.token);
                } else setShow(true);
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
                    <Alert.Heading>No se pudo iniciar sesión</Alert.Heading>
                    <p>Verifica si tus datos son correctos...</p>
                </center>
            </Alert>
            <Container>
                <br />
                <br />
                <h1>Inicia sesión</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
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
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={formValue.password}
                            onChange={onChange}
                        />
                        <br />
                    </Form.Group>
                    <div align="center">
                        <Button
                            align="center"
                            variant="secondary"
                            type="submit"
                        >
                            Iniciar sesión
                        </Button>
                    </div>
                </Form>
                <br />
                <div align="center">
                    <a href={"/proautosxpress/public/Register"}>Registrarse</a>
                    {" | "}
                    <a href={"/proautosxpress/public/DeleteUser"}>
                        Eliminar cuenta
                    </a>
                    {" | "}
                    <a href={"/proautosxpress/public/changePassword"}>
                        Olvidé mi contraseña
                    </a>
                </div>
            </Container>
        </>
    );
};
export default LoginForm;