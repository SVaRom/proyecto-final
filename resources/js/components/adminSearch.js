import React, {useState} from 'react';
import { Container, Button,Form,Table } from 'react-bootstrap';
import axios from 'axios';
import Nav from 'react-bootstrap/Nav';
import Toast from 'react-bootstrap/Toast'
function adminSearch(){
    const [show, setShow] = useState(false);
    const toggleShowA = () => setShow(!show);
    const [data, setData] = useState({
        codigo:'',
        nombre:'',
        precio:''
    })
    const [Producto,setProducto]=useState([]);

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
              axios.get('api/searchP', {
                params: {
                  codigo: data.codigo
                }
              })
              .then(response=>{
                  if(response.data[0]!=null){
                    setProducto(response.data)
                    console.log(Producto)
                  }else{
                        Producto.codigo=""
                        Producto.nombre=""
                        Producto.precio=""
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
    <h1>Admin mode</h1>
    </div>
    </div>
    <Container>
    <Nav fill variant="tabs" defaultActiveKey="d">
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
          <Toast.Body>Producto no encontrado!</Toast.Body>
        </Toast>
<Form.Group>
    <br/>
    <center>
    <Form.Label>Search a product:</Form.Label>
    <Form.Control type="text" name="codigo" placeholder="Enter product's code" onChange={handleInputChange}/>
  <Button variant="dark" size="lg" block onClick={handleSubmit}>Search</Button>
  </center>
  </Form.Group>
<hr/>
  <Table striped bordered hover show="false">
  <thead>
    <tr>
      <th>Code</th>
      <th>Name</th>
      <th>Price</th>
    </tr>
  </thead>
  {Producto.map(dataItem=>(
          <tbody  key={dataItem.codigo}>
          <tr>
        <th>{dataItem.codigo}</th>
      <th>{dataItem.nombre}</th>
      <th>${dataItem.precio}</th>
      </tr>
    </tbody>
      ))}
    </Table>
    </Container>
</div>
    )
}
export default adminSearch