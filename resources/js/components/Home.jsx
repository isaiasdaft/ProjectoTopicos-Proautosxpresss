
import React from 'react';
import { Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Accordion from 'react-bootstrap/Accordion';
import logo from '../../css/logoautos.png';

const Home=()=> {
    return (
    
        <Container>                
          <div >
          <h2></h2>
              <br></br>
              <>
                 
            <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://acnews.blob.core.windows.net/imgnews/medium/NAZ_383016593d904edda2e2a1c1f6b1fe3c.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Autopartes</h3>
            <p>Para todas las marcas</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://refaccionariasdelvalle.s3.amazonaws.com/get_branches/images/706/monterrey_44.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Refaccionaria ProAutosXpress </h3>
            <p>Gran variedad en todos los productos.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.remediosdigitales.com/b53b95/ventas-autos-mexico-2022-primer-semestre-/1366_2000.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Sucursal Aguascalientes</h3>
            <p>Bienvenidos.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </>
   </div>
    <br></br>
    <div className='text-center container'>
    <CardGroup>
      <Card border="primary">
        <Card.Img variant="top" src="https://marcasdecoches.info/wp-content/uploads/2019/03/nombres-de-marcas-de-coches-autos-o-carros-del-mundo-lista-completa-ordenada-por-abcdario.jpg"  height={'220px'}/>
        <Card.Body>
          <Card.Title>Categorias</Card.Title>
          <Card.Text>
          ProautosXpress es de las mejores en términos de calidad. Los elementos que diseñamos toman en cuenta los detalles electrónicos y mecánicos de los autos, comodidad y excelente desempeño.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      <Card border="primary">
        <Card.Img variant="top" src="https://www.emep.mx/backend/programas/infoweb/151221084046.jpg" height={'220px'}/>
        <Card.Body>
          <Card.Title>Servicios</Card.Title>
          <Card.Text>
          la refaccionaria realiza chequeos y evaluaciones de la situación actual del coche, lo que permitirá determinar las piezas que deben sustituirse al igual que los tratamientos complementarios que volverán al coche a la normalidad.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      <Card border="primary">
      <img  src={logo} height={'220px'}    />
        <Card.Body>
          <Card.Title>Acerca de Nosotros</Card.Title>
          <Card.Text>
          Con nuestro nuevo Centro de detalles, mantenga su automóvil con un aspecto fresco.
          El mejor detalle automático que puedas tener en tus manos.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
    </CardGroup>
     </div>
     <br></br>
     <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Recomendación</Accordion.Header>
        <Accordion.Body>
          Registras tus datos personales para poder acceder a una cuenta, y puedas acceder a mas funcionalidades del sistema
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Nuestra Ubicación</Accordion.Header>
        <Accordion.Body>
        Prados de Villa Asunción, 20280 Aguascalientes, Ags.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <div>   
        <br></br>
        <footer className="container">
            <p className="float-right"><a href="#">Top</a></p>
            <p>&copy; {(new Date().getFullYear())} ProAutosXpress AS de CV. &middot; <a 
            href="#">Política de Privacidad</a> &middot; <a href="#">Términos y condiciones</a></p>
        </footer>
     </div>
  </Container>  
         );
}
export default Home;