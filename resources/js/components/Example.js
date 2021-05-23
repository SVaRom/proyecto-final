import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Form, Button, Container,Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Iframe from 'react-iframe'


function Example() {
return (
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
  <br/>
<center><h1>Ferretería Armando</h1></center>
  <hr/>
  <h4>
    <p align="justify">Última publicación </p>
  </h4>
  <hr width="42%" align="left"/>
  <Row>
  <Iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fferreteriaa%2Fposts%2F1574681002720772&width=500&show_text=true&height=454&appId" width="500" height="360" style="border:none;overflow:hidden" scrolling="no" frameBorder="0" allowFllScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></Iframe>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <Iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3703.0311067955695!2d-102.26970207393862!3d21.856335809439525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x8429ed98edaf935f%3A0xf87ce6658942a430!2sferreteria%20armando!3m2!1d21.8556626!2d-102.2695586!5e0!3m2!1ses-419!2smx!4v1621349578474!5m2!1ses-419!2smx" width="500" height="360" style="border:0;" allowfullscreen="true" loading="lazy"></Iframe>
  </Row>
  <br/>
  <hr/>
  <h6>
    <center>
      Contactanos:
      <hr width="20%"/>
      Correo electrónico:&nbsp;
      <i><b>ferre_armando3@hotmail.com</b></i>
      <br/>
      Teléfono:&nbsp;
      <i><b>4499772948</b></i> 
    </center>
  </h6>
  <br/>
  <br/>
  <br/>
</Container>
</div>
);
}

export default Example;