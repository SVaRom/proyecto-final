import React, {useState} from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import Toast from 'react-bootstrap/Toast'
import Nav from 'react-bootstrap/Nav';
function adminDel(){
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const toggleShowA = () => setShow(!show);
    const toggleShowB = () => setShow2(!show2);

    const [data, setData] = useState({
        codigo: ''
    })

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
      axios.get('api/deleteP',{
          params:{
            codigo:data.codigo
          }
      }).then(response=>{
        setShow(true)
        console.log('Sí')
      })
      .catch(error => {
        setShow2(true)
        console.log('No\n', error.message ) 
      })
    }
    return(
<div >
  <div id="formContent">
  <div className="fadeIn first">
    <h1>Admin mode</h1>
    </div>
    </div>
    <Container>
    <Nav fill variant="tabs" defaultActiveKey="b">
  <Nav.Item>
    <Nav.Link href='http://localhost/proyecto-final/public/inicioAdmin' eventKey="a">Alta producto</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="b" href='http://localhost/proyecto-final/public/Adelete'>Baja producto</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="c" href='http://localhost/proyecto-final/public/Achange'>Modificar producto</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href='http://localhost/proyecto-final/public/login'>
      Return login
    </Nav.Link>
  </Nav.Item>
</Nav>
<Toast show={show} onClose={toggleShowA}>
          <Toast.Header>
            <strong className="mr-auto">Server</strong>
            <small>New</small>
          </Toast.Header>
          <Toast.Body>Eliminación exitosa!</Toast.Body>
        </Toast>
        <Toast show={show2} onClose={toggleShowB}>
          <Toast.Header>
            <strong className="mr-auto">Server</strong>
            <small>New</small>
          </Toast.Header>
          <Toast.Body>Eliminación no exitosa</Toast.Body>
        </Toast>
<div className="wrapper fadeInDown">
  <div id="formContent">
  <div className="fadeIn first">
    <h1>Delete product</h1>
    </div>
    <form>
    <input type="text"  className="fadeIn second" name="codigo" placeholder="Code" onChange={handleInputChange}/>
      <br/>
      <input type="submit" className="fadeIn third" value="Delete" onClick={handleSubmit}/>
    </form>
  </div>
  </div>
    </Container>
</div>
    )
}
export default adminDel