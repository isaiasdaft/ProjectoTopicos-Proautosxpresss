import React from "react";
import { Container, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
const BorrarPro = () => {
  const [formValue, setformValue] = React.useState({
    id: "",
});
let history = useNavigate();

const onChange = (e) => {
    e.persist();
    setformValue({ ...formValue, [e.target.name]: e.target.value });
};
const handleSubmit = (e) => {
    if (e && e.preventDefault()) e.preventDefault();

    const formData = new FormData();
    formData.append("id", formValue.id);

    axios
        .post(
            "http://localhost/proautosxpress/public/api/Dprod",
            formData,
            {
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
        });
};
return (
    <>
       
        <Container>
            
            <br />
            <br />
            <center>
            <h1>Descartar producto</h1>
            </center>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Para borrar una producto ingrese el id del artículo:</Form.Label>
                    <Form.Control
                        type="texto"
                        placeholder="ID"
                        name="id"
                        value={formValue.id}
                        onChange={onChange}
                    />
                </Form.Group>
                <div align="center">
                    <Button variant="danger" type="submit">
                        Eliminar producto
                    </Button>
                </div>
            </Form>
        </Container>
    </>
);
};
export default BorrarPro;