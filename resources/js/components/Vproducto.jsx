import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Vproducto = (props) => {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [isLoading, setLoading] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        (async () => {
            setLoading(true);
            

            axios
                .post("http://localhost/proautosxpress/public/api/Vprod", 
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
                    <h2>Productos proporcionados</h2>
                </center>
                <hr />
                <Table striped bordered hover size="sm" variant="light">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Provedor</th>
                            <th>Menudeo</th>
                            <th>Mayoreo</th>
                            <th>Descripcion</th>
                            <th>Pesoneto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((dataItem) => (
                            <tr key={dataItem.id}>
                                <td>{dataItem.id}</td>
                                <td>{dataItem.nombre}</td>
                                <td>{dataItem.provedorfk}</td>
                                <td>${dataItem.Preciomenudeo}</td>
                                <td>${dataItem.Preciomayoreo}</td>
                                <td>{dataItem.descripcion}</td>
                                <td>{dataItem.pesoneto}g</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container> 
            <div > <center>
                 <Button variant="primary" onClick={handleShow}>
                         Info
                </Button>
                </center>
           </div>
                <Offcanvas show={show} onHide={handleClose} backdrop="static">
                    <Offcanvas.Header closeButton>
                    <Offcanvas.Title>ProAutosXpress</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                         Artículos registrados en el sistema y disponibles en el stock.
                        Verificar la existencia de cada producto, para solicitar el envió por parte de los proveedores asociados.
                    </Offcanvas.Body>
                </Offcanvas>
        </>
    );
};
export default Vproducto ;
