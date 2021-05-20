import React, {useState} from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import Axios from 'axios';
import { Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Student(){
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    usuario:'',
    nombre:'',
    correo:'',
    contraseña:''
  })
  const [Usuario, setUsuario] = useState([])

  const handleInputChange = (event) => {
      // console.log(event.target.name)
      // console.log(event.target.value)
      setData({
          ...data,
          [event.target.name] : event.target.value
      })
  
  }
 
  const handleSubmit = async (e) =>{
      e.preventDefault();
      let formDatax = new FormData()
      formDatax.append('usuario', data.usuario)
      formDatax.append('nombre', data.nombre)  
      formDatax.append('correo', data.correo)  
      formDatax.append('contraseña', data.contraseña)
        await Axios({
          method: 'post',
          url: 'api/addUser',
          data: formDatax,
          config: { headers: {'Content-Type': 'multipart/form-data' }}
          })
          .then(response=>{
            console.log('Sí')
            location.href='http://localhost/proyecto-final/public/login';
          })
          .catch(error => {
            setShow(true)
            console.log('No\n', error.message ) 
          })
          
        }
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
    <Alert show={show} variant="danger" onClose={() => setShow(false)} dismissible>
      <center><Alert.Heading>No se pudo hacer el registro</Alert.Heading>
                <p>
                  Verifica tus datos, el registro no se pudo procesar.
                  <br/>
                  Intenta cambiando el ID o el email
                </p></center>
              </Alert>
      <Container>
<div className="wrapper fadeInDown">
  <div id="formContent">
  <div className="fadeIn first">
    <h1>Create account</h1>
    </div>
    <form onSubmit={handleSubmit}>
    <input type="text"  className="fadeIn second" name="usuario" placeholder="Username" onChange={handleInputChange}/>
      <input type="text"className="fadeIn third" name="nombre" placeholder="Name" onChange={handleInputChange}/>
    <input type="email"  className="fadeIn fourth" name="correo" placeholder="Email" onChange={handleInputChange}/>
      <input type="password"className="fadeIn fifth" name="contraseña" placeholder="Password" onChange={handleInputChange}/>
      <input type="submit" className="fadeIn seventh" value="Sign in"/>
    </form>
  </div>
  </div>
</Container>

    </div>
  
      )    
  }
export default Student;