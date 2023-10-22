import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function Boy() {

  let navigate = useNavigate();

  return (
    <div className='card'>

<Button id='cartbutton' variant="dark" onClick={()=>{
        navigate("/")

       }}>Categories</Button>

   <div id='clothing'>   
<h1 ><i>NYKAA</i></h1>
<h6>Everything you need for your fitness journey is right here.</h6>
<h1>CLOTHING FOR MEN</h1>
</div>
<div className='maincard'>
      <Card  id='card' style={{ width: '25%'}}  >
        
      <Card.Img  variant="top" src="https://i.pinimg.com/564x/a2/29/7f/a2297f37378f21e9f922a77bcaf4bc16.jpg" />
      <Card.Body>
        <Card.Title>TSHIRTS & TANK TOP</Card.Title>
        <Card.Text>
        LIFESTYLE MEN HOT CORAL BIO-WASH COLOURBLOCK SWEATSHIRT.
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>

    <Card id='card' style={{ width: '25%' }} >
      <Card.Img variant="top" src="https://i.pinimg.com/564x/f4/b3/79/f4b379cd911141f0847cdcd4b90e6fb5.jpg" />
      <Card.Body>
        <Card.Title>TSHIRTS & shorts</Card.Title>
        <Card.Text>
        LIFESTYLE MEN HOT CORAL BIO-WASH COLOURBLOCK SWEATSHIRT.
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
   
    <Card id='card' style={{ width: '25%'}}>
      <Card.Img variant="top" src="https://i.pinimg.com/564x/00/ef/45/00ef4535d0428e90fb6887c4fa3d0a41.jpg" />
      <Card.Body >
        <Card.Title>TSHIRTS & TANK TOP</Card.Title>
        <Card.Text>
        LIFESTYLE MEN HOT CORAL BIO-WASH COLOURBLOCK SWEATSHIRT.
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>

    <Card id='card' style={{ width: '25%' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/564x/72/25/78/7225784f43e55aceb616b4c2bfee565c.jpg" />
      <Card.Body>
        <Card.Title>JACKET</Card.Title>
        <Card.Text>
        LIFESTYLE MEN HOT CORAL BIO-WASH COLOURBLOCK SWEATSHIRT.
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
    <Card id='card' style={{ width: '25%' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/564x/d3/9a/6d/d39a6d1276ac61f1e465c4172d5d3d22.jpg" />
      <Card.Body>
        <Card.Title>Wedding Shoots</Card.Title>
        <Card.Text>
        LIFESTYLE MEN HOT CORAL BIO-WASH COLOURBLOCK SWEATSHIRT.
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
    <Card id='card' style={{ width: '25%',  }}>
      <Card.Img variant="top" src="https://i.pinimg.com/564x/f7/a7/00/f7a700ab77c523200a037a58879d1e92.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        LIFESTYLE MEN HOT CORAL BIO-WASH COLOURBLOCK SWEATSHIRT.
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
   
  <Card id='card' style={{ width: '25%' ,   }}>
      <Card.Img variant="top" src="https://i.pinimg.com/564x/8d/f9/89/8df98960f0b24125e7011926904147a9.jpg" />
      <Card.Body>
        <Card.Title>SweatShirt & Hoodies</Card.Title>
        <Card.Text>
        LIFESTYLE MEN HOT CORAL BIO-WASH COLOURBLOCK SWEATSHIRT.
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>

    <Card id='card' style={{ width: '25%'  }}>
      <Card.Img variant="top" src="https://i.pinimg.com/564x/4f/72/af/4f72afc30df221c9d45ae4cfcacea6eb.jpg" />
      <Card.Body>
        <Card.Title>Shirt & jeans</Card.Title>
        <Card.Text>
        LIFESTYLE MEN HOT CORAL BIO-WASH COLOURBLOCK SWEATSHIRT.
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>

    <Card id='card' style={{ width: '25%'  }}>
      <Card.Img variant="top" src="https://i.pinimg.com/564x/3c/be/ca/3cbeca4f601e711a1b6faf20b894dd73.jpg" />
      <Card.Body>
        <Card.Title>TSHIRTS & shorts</Card.Title>
        <Card.Text>
        LIFESTYLE MEN HOT CORAL BIO-WASH COLOURBLOCK SWEATSHIRT.
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>

    <Card id='card' style={{ width: '25%' ,   }}>
      <Card.Img variant="top" src="https://i.pinimg.com/564x/b7/d4/43/b7d44304214863dfc6090efdc4a68620.jpg" />
      <Card.Body>
        <Card.Title>Rain courts</Card.Title>
        <Card.Text>
        LIFESTYLE MEN HOT CORAL BIO-WASH COLOURBLOCK SWEATSHIRT.
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
    
    </div>

    </div>
  )
}

export default Boy