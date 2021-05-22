import React, {useState} from 'react';
import { Container,Alert } from 'react-bootstrap';
import axios from 'axios';
import { Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
function login(){
  const [show, setShow] = useState(false);
    const [data, setData] = useState({
        usuario: '',
        contraseña:''
    })

  const handleInputChange = (event) => {
      // console.log(event.target.name)
      // console.log(event.target.value)
      setData({
          ...data,
          [event.target.name] : event.target.value
      })
  
  }
 
          const handleAll = async (e) =>{
            e.preventDefault();
              axios.get('api/search', {
                params: {
                  usuario: data.usuario
                }
              })
              .then(response=>{
                  if(data.contraseña==response.data[0].contraseña){
                    location.href='http://localhost/proyecto-final/public/inicioUser';
                  }else{
                      setShow(true)
                  }
                  
              }).catch(error => {
                if(data.usuario=="admin"&&data.contraseña=="root"){
                  location.href='http://localhost/proyecto-final/public/inicioAdmin';
                }else{
                  setShow(true)
                }
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
</Navbar>
<Alert show={show} variant="danger" onClose={() => setShow(false)} dismissible>
      <center><Alert.Heading>No se pudo iniciar sesión</Alert.Heading>
                <p>
                  Verifica si tus datos son correctos, de lo contrario comunicate con nosotros.
                </p></center>
              </Alert>
<Container>
<div className="wrapper fadeInDown">
  <div id="formContent">
  <div className="fadeIn first">
    <h1>Inicia sesión</h1>
    </div>
    <form>
    <input type="text"  className="fadeIn second" name="usuario" placeholder="Username" onChange={handleInputChange}/>
      <input type="password"className="fadeIn third" name="contraseña" placeholder="Password" onChange={handleInputChange}/>
      <input type="submit" className="fadeIn fourth" value="Log In" onClick={handleAll}/>
    </form>
    <div id="formFooter">
      <a className="underlineHover" href="/proyecto-final/public/change">Forgot Password?</a>
      <br/>
      <a className="underlineHover" href="/proyecto-final/public/create">Create account</a>
      <br/>
      <a className="underlineHover" href="/proyecto-final/public/delete">Delete account</a>
    </div>
  </div>
  </div>
</Container>
</div>
   
      )    
  }
export default login;