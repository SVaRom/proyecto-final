import React, {useState} from 'react';
import Nav from 'react-bootstrap/Nav';
import { Container} from 'react-bootstrap';
import Axios from 'axios';
import Toast from 'react-bootstrap/Toast'

function vistaUser() {
  const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const toggleShowA = () => setShow(!show);
    const toggleShowB = () => setShow2(!show2);
    const [data, setData] = useState({
        codigo:'',
        nombre:'',
        precio:''
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
          let formDatax = new FormData()
          formDatax.append('codigo', data.codigo)
          formDatax.append('nombre', data.nombre)  
          formDatax.append('precio', data.precio)
            await Axios({
              method: 'post',
              url: 'api/addProducto',
              data: formDatax,
              config: { headers: {'Content-Type': 'multipart/form-data' }}
              })
              .then(response=>{
                console.log('Sí')
                setShow(true)
              })
              .catch(error => {
                setShow2(true)
                console.log('No\n', error.message ) 
              })
              
            }
return (
<div>
<div >
  <div id="formContent">
  <div className="fadeIn first">
    <h1>Admin mode</h1>
    </div>
    </div>
    </div>
    <Container>
    <Nav fill variant="tabs" defaultActiveKey="a">
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
    <Nav.Link eventKey="d" href='http://localhost/proyecto-final/public/Asearch'>Buscar producto</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" href='http://localhost/proyecto-final/public/login'>
      Return login
    </Nav.Link>
  </Nav.Item>
</Nav>
<Toast show={show} onClose={toggleShowA}>
          <Toast.Header>
            <strong className="mr-auto">Server</strong>
            <small>New</small>
          </Toast.Header>
          <Toast.Body>Alta exitosa!</Toast.Body>
        </Toast>
        <Toast show={show2} onClose={toggleShowB}>
          <Toast.Header>
            <strong className="mr-auto">Server</strong>
            <small>New</small>
          </Toast.Header>
          <Toast.Body>Alta no exitosa</Toast.Body>
        </Toast>
<div className="wrapper fadeInDown">
  <div id="formContent">
  <div className="fadeIn first">
    <h1>Add product</h1>
    </div>
    <form>
    <input type="text"  className="fadeIn second" name="codigo" placeholder="Code" onChange={handleInputChange}/>
    <input type="text"  className="fadeIn third" name="nombre" placeholder="Description" onChange={handleInputChange}/>
    <input type="number"  className="fadeIn fourth" name="precio" placeholder="$$$" onChange={handleInputChange}/>
      <br/>
      <input type="submit" className="fadeIn fifth" value="Add product" onClick={handleSubmit}/>
    </form>
  </div>
  </div>
    </Container>
</div>
);
}

export default vistaUser;