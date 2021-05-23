import React,  {useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Axios from 'axios'
import { Route, Switch, Link,useHistory } from 'react-router-dom';
import { Form, Button, Container,Row,Col, FormGroup,CardDeck } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
const vistaUser = props => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        (async () => {
          setLoading(true);
          const response = await Axios({
              method: 'get',
              url: 'api/producto'
            })
            .then(response => {
                console.log('response.data',response.data)
                setData(response.data);
            })
          setLoading(false);
          console.log(data)
        })();
      }, []);
return(
    <div>
<Navbar bg="dark" variant="dark">
<Navbar.Brand href="/proyecto-final/public/inicioUser">
<img
        src="images/logo.png"
        width="53"
        height="60"
        className="d-inline-block align-top"
      />
</Navbar.Brand>
<Nav className="mr-auto">
<Nav.Link as = {Link} to="/proyecto-final/public/inicioUser">Cupones</Nav.Link>
</Nav>
<Form inline>
    <Button variant="outline-light" size="lg"  as = {Link} to="/proyecto-final/public/login">Log out</Button>
    </Form>
</Navbar>
<Container margin='auto'>
  <center>
    <br/>
<h2>Cupones activos</h2>
  </center>
  <hr/>
      <CardDeck>
        {data.map(dataItem =>(
          
            <Card style={{ width: '18rem' }} background-size="contain" key={dataItem.codigo}>
              <Card.Img variant="top" src="images/181631.png" />
            <Card.Body>
                <Card.Title>{dataItem.nombre}</Card.Title>
                <Card.Text>Precio oferta:${dataItem.precio}</Card.Text>
            </Card.Body>
            <Card.Footer>
              Precio anterior:${dataItem.precio * 1.15}
            </Card.Footer>
            </Card>
        ))}
        </CardDeck>
        </Container>
</div>
);
}
export default vistaUser;