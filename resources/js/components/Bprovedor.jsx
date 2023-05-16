import React, {useState} from 'react';
import { Container, Button,Form,Table } from 'react-bootstrap';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert'

function Bprov(){
    const [show, setShow] = useState(false);
    const [data, setData] = useState({
        id:'',
        name:'',
        descripcion:'',
        productosK:'',
        hora:''
      
    })
    const [provedores, setautor] = useState([])
  
    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name] : event.target.value
        });    
    };
 
  const handleSubmit = async (e) =>{
    e.preventDefault();
              axios.get('api/BProv', {
                params: {
                 name: data.name
                }, 
                headers: {
                  Accept: "application/json",
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              })
              .then(response=>{
                  if(response.data[0]!=null){
                    setautor(response.data)
                    console.log(provedores)
                  }else{
                        provedores.id=""
                        provedores.name=""
                        provedores.descripcion=""
                        provedores.productosK=""
                        provedores.hora=""

                        setShow(true)
                  }                  
              })
              .catch(error=>{
                  setShow(true)
              })
      }
    return(
            
      <div >
        <div id="formContent">
        <div className="fadeIn first">
        <center>
          <h1>Busqueda por nombre</h1>
          </center>
          </div>
          </div>
          <Container>

          <Alert show={show} variant="danger" onClose={() => setShow(false)} dismissible>
            <center><Alert.Heading>No se pudo encontrar</Alert.Heading>
                      <p>
                        Verifica tus datos, no se logro encontrar tus datos.
                        <br/>
                        Intenta con un nombre distinto registrado.
                      </p></center>
                          </Alert>
      <Form.Group>
          <br/>
          <center>
          <Form.Label>Buscando por nombre a :</Form.Label>
          <Form.Control type="text" name="id" placeholder="id" onChange={handleInputChange}/>
          <br></br>
        <Button variant="dark" size="sm" block onClick={handleSubmit}>Search</Button>
        </center>
        </Form.Group>
      <hr/>
        <Table striped bordered hover show="false" variant="secondary">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>descricpcion</th>
            <th>productosK</th>
            <th>hora</th>
            </tr>
        </thead>
        {provedores.map(dataItem=>(
                <tbody  key={dataItem.id}>
                <tr>
              <th>{dataItem.id}</th>
            <th>{dataItem.name}</th>
            <th>{dataItem.descripcion}</th>
            <th>{dataItem.productosK}</th>
            <th>{dataItem.hora}</th>
            
            </tr>
          </tbody>
            ))}
          </Table>
          </Container>
      </div>
    )
}
export default Bprov;
