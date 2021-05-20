import { Form, Button, Container,Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
function about(){
    return(
        <div>
<Navbar bg="dark" variant="dark">
<Navbar.Brand href="/proyecto-final/public/">
<img
        src="images/logo.png"
        width="53"
        height="60"
        className="d-inline-block align-top"
      />
</Navbar.Brand>
<Nav className="mr-auto">
<Nav.Link as = {Link} to="/proyecto-final/public/">Home</Nav.Link>
<Nav.Link as = {Link} to="/proyecto-final/public/about">About us</Nav.Link>
</Nav>
<Form inline>
    <Button variant="outline-light" size="lg"  as = {Link} to="/proyecto-final/public/login">Log in</Button>
    </Form>
</Navbar>
<Container>
            
            <Jumbotron/>
            <p align = "justify">
            A lo largo de los años <i>"Ferretería Armando"</i> ha ganado prestigio entre las ferreterías, fundada en 1997 el carisma de "Don Roma" ha logrado atrapar varios clientes por su excelente servicio al estado de Aguascalientes. 
            </p><br/><b><i> <center>"La calidad y sublimidad de nuestros productos ha conseguido que el prestigio del negocio se eleve entre los ciudadanos." </center></i> </b>
            <p align = "justify"><br/>De igual forma, la Ferretería Armando ha cumplido siempre con todos los protocolos de seguridad y se muestra orgullosa 
            de proclamar la superioridad de los productos que se venden en el negocio. 
            <br/><br/>Don Romualdo es un ciudadano ejemplar que ha hecho un gran servicio por el municipo de Aguascalientes al poder compartir sus concocimientos con la gente de su colonia y así poder abrir después la ferretería, logrando que más
            gente pueda llegar a sus servicios y tengan un trato excelente por parte de todos los empleados. 
            <br/><br/><br/><br/><br/>
            </p>
        </Container>
</div>

    )
        
}
export default about;