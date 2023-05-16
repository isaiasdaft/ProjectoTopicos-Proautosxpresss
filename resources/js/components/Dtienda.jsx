import React from "react";
import { Container, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
const BorrarT = () => {
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
            "http://localhost/proautosxpress/public/api/Dtienda",
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
            console.log("Action completed");
            history("/proautosxpress/public/Btienda");
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
            <h1>Descartar una tienda</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Para borrar una tienda escriba su id:</Form.Label>
                    <Form.Control
                        type="texto"
                        placeholder="Tienda del sur, norte, este...."
                        name="id"
                        value={formValue.id}
                        onChange={onChange}
                    />
                </Form.Group>
                <div align="center">
                    <Button variant="primary" type="submit">
                        Descartar tienda
                    </Button>
                </div>
            </Form>
        </Container>
    </>
);
};
export default BorrarT;