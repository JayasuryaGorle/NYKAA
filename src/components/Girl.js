import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function Girl() {

  let navigate = useNavigate();
  return (
    
     <div className='card'>
       <Button id='cartbutton' variant="dark" onClick={()=>{
        navigate("/")

       }}>Categories</Button>

     <div id='clothing'>   
<h1 ><i>NYKAA</i></h1>
<h6>Everything you need for your fitness journey is right here.</h6>
<h1>Woman Clothing'</h1>
</div> 
<div className='maincard'>
    <Card   id='card' style={{ width: '25%' }} >
    <Card.Img variant="top" src="https://i.pinimg.com/564x/0b/3e/fc/0b3efc93ad5a32cc04aaa7d8aa51dcd8.jpg" />
    <Card.Body>
      <Card.Title>Tops & Tshirt</Card.Title>
      <Card.Text>
      Lifestyle Women Oxy Fire Rapid-Dry Solid Jackets.
      </Card.Text>
      <Button variant="primary">Add to cart</Button>
    </Card.Body>
  </Card>

  <Card  id='card' style={{ width: '25%' }}>
    <Card.Img variant="top" src="https://i.pinimg.com/564x/c9/8b/7b/c98b7b03bb582e4473914298ee017965.jpg" />
    <Card.Body>
      <Card.Title>Tshirt</Card.Title>
      <Card.Text>
      Lifestyle Women Oxy Fire Rapid-Dry Solid Jackets.
      </Card.Text>
      <Button variant="primary">Add to cart</Button>
    </Card.Body>
  </Card>

  <Card  id='card' style={{ width: '25%' }}>
    <Card.Img variant="top" src="https://i.pinimg.com/564x/58/b7/ec/58b7ec69a65067dd6c0511717d760a62.jpg" />
    <Card.Body>
      <Card.Title>Track Pants & Tights</Card.Title>
      <Card.Text>
      Lifestyle Women Oxy Fire Rapid-Dry Solid Jackets.
      </Card.Text>
      <Button variant="primary">Add to cart</Button>
    </Card.Body>
  </Card>

  <Card  id='card' style={{ width: '25%' }}>
    <Card.Img variant="top" src="https://i.pinimg.com/564x/c4/71/1e/c4711e665a413f04436a9011ba2b2635.jpg" />
    <Card.Body>
      <Card.Title>Tops & Pants</Card.Title>
      <Card.Text>
      Lifestyle Women Oxy Fire Rapid-Dry Solid Jackets.
      </Card.Text>
      <Button variant="primary">Add to cart</Button>
    </Card.Body>
  </Card>
  <Card  id='card' style={{ width: '25%' }}>
    <Card.Img variant="top" src="https://i.pinimg.com/564x/86/90/43/8690433ce4010977cb1d77a8bf51dbd1.jpg" />
    <Card.Body>
      <Card.Title>JACKETS</Card.Title>
      <Card.Text>
      Lifestyle Women Oxy Fire Rapid-Dry Solid Jackets.
      </Card.Text>
      <Button variant="primary">Add to cart</Button>
    </Card.Body>
  </Card>
  <Card  id='card' style={{ width: '25%' }}>
    <Card.Img variant="top" src="https://i.pinimg.com/564x/73/c6/ca/73c6ca6ee06d245db91fb0971047e223.jpg" />
    <Card.Body>
      <Card.Title>Tshirts & pants</Card.Title>
      <Card.Text>
      Lifestyle Women Oxy Fire Rapid-Dry Solid Jackets.
      </Card.Text>
      <Button variant="primary">Add to cart</Button>
    </Card.Body>
  </Card>
  <Card  id='card' style={{ width: '25%' }}>
    <Card.Img variant="top" src="https://i.pinimg.com/564x/48/a4/fa/48a4fabb2d5fc2ddd688709ac5a18e17.jpg" />
    <Card.Body>
      <Card.Title>Tshirt & courts</Card.Title>
      <Card.Text>
      Lifestyle Women Oxy Fire Rapid-Dry Solid Jackets.
      </Card.Text>
      <Button variant="primary">Add to cart</Button>
    </Card.Body>
  </Card>
  <Card  id='card' style={{ width: '25%' }}>
    <Card.Img variant="top" src="https://i.pinimg.com/736x/10/df/4c/10df4ca07e1ebf39de838a9ccf54476f.jpg" />
    <Card.Body>
      <Card.Title>Tshirts & formals</Card.Title>
      <Card.Text>
      Lifestyle Women Oxy Fire Rapid-Dry Solid Jackets.
      </Card.Text>
      <Button variant="primary">Add to cart</Button>
    </Card.Body>
  </Card>
  <Card  id='card' style={{ width: '25%' }}>
    <Card.Img variant="top" src="https://i.pinimg.com/564x/90/f1/80/90f180e5aa19684d84da43d4cb26362a.jpg" />
    <Card.Body>
      <Card.Title>Tops</Card.Title>
      <Card.Text>
      Lifestyle Women Oxy Fire Rapid-Dry Solid Jackets.
      </Card.Text>
      <Button variant="primary">Add to cart</Button>
    </Card.Body>
  </Card>
  <Card  id='card' style={{ width: '25%' }}>
    <Card.Img variant="top" src="https://i.pinimg.com/564x/2d/0d/ad/2d0dad63bcd39ab6649c646f5f60cea2.jpg" />
    <Card.Body>
      <Card.Title>Wedding dresses</Card.Title>
      <Card.Text>
      Lifestyle Women Oxy Fire Rapid-Dry Solid Jackets.
      </Card.Text>
      <Button variant="primary">Add to cart</Button>
    </Card.Body>
  </Card>

  </div>
  </div>
    
  )
}

export default Girl