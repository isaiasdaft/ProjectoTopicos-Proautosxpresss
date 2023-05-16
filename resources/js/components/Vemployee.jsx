import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Vemployee = (props) => {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [isLoading, setLoading] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        (async () => {
            setLoading(true);
            

            axios
                .post("http://localhost/proautosxpress/public/api/BEmplo", 
                FormData,{
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
                    
                ).then((response) => {
                    setData(response.data);
                });
                setLoading(false);
                console.log(data);
        })();
    }, []);
    return (
        <>           
            <Container>
                <center>
                    <br />
                    <h2>Lista de trabajadores</h2>
                </center>
                <hr />
                <Table striped bordered hover size="sm" variant="dark">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Apellidos</th>
                            <th>Dirección</th>
                            <th>Puesto</th>
                            <th>Telefóno</th>
         
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((dataItem) => (
                            <tr key={dataItem.id}>
                                <td>{dataItem.id}</td>
                                <td>{dataItem.name}</td>
                                <td>{dataItem.lastname}</td>
                                <td>{dataItem.address}</td>
                                <td>{dataItem.position}</td>
                                <td>{dataItem.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container> 
            <div > <center>
                 <Button variant="success" onClick={handleShow}>
                         Info-user
                </Button>
                </center>
           </div>
                <Offcanvas show={show} onHide={handleClose} backdrop="static">
                    <Offcanvas.Header closeButton>
                    <Offcanvas.Title>ProAutosXpress - Empleados</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        Tabla con los datos de todos los empleados registrados a ProautosXpress sa de cv
                        Revisar la información para que sea la mas reciente por parte de cada trabajador.
                    </Offcanvas.Body>
                </Offcanvas>
        </>
    );
};
export default Vemployee;
