import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Carousel from 'react-bootstrap/Carousel';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';


function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          {/* <Offcanvas.Title><i>NYKAA</i>.</Offcanvas.Title> */}
          <img width="35%" src='https://thoughtoverdesign.com/wp-content/uploads/2017/12/nykaa_section4.gif'></img>

        </Offcanvas.Header>
        <Offcanvas.Body>
          <strong>
        Hello. What can we help you with?
        <img width="40%" src='https://render.fineartamerica.com/images/rendered/search/print/5.5/8/break/images/artworkimages/medium/1/moon-man-nicholas-ely.jpg'></img>
        <br></br>
        <br></br>
       <i>*</i> Buy cosmetics & beauty products online from Nykaa, the online shopping beauty store. Browse makeup, health products & more from top beauty brands.
        </strong>
        <br></br>
<img width="100%" src='https://www.capitalmind.in/wp-content/uploads/2021/09/Neon-Green-60x36-Landscape-Voters-Education-Banner6-scaled.jpg'></img>


        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Home() {

  let navigate = useNavigate();





  return (
    
      <div className='main'>
        
        <Navbar className='main' bg="dark" data-bs-theme="dark">
        <Container>
  <Navbar.Brand className='navbar' href="#home"><strong><i>NYKAA</i></strong></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link  href="#home" onClick={()=>{
              navigate("/Boy")
            }}><em>Men</em></Nav.Link>
            <Nav.Link href="#features" onClick={()=>{
              navigate("/Girl")
            }}><em>Women</em></Nav.Link>
            
            <Dropdown color='white' >
      <Dropdown.Toggle variant="success" id="dropdown-basic">
  <em>Categories</em>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <h6></h6>
        <Dropdown.Item href="#/action-1" ><img width="100%" src='https://i.pinimg.com/564x/e1/fe/b7/e1feb7e6fb4e57a76818a5d6d87972d6.jpg'></img></Dropdown.Item>
        <Dropdown.Item href="#/action-2" ><img  width="100%" src='https://i.pinimg.com/564x/eb/83/48/eb8348203894fc08a26cb62cce3884ba.jpg'></img></Dropdown.Item>
        <Dropdown.Item href="#/action-2" ><img  width="100%" src='https://i.pinimg.com/564x/f3/92/eb/f392ebbe14e3083323ab93df972df4d8.jpg'></img></Dropdown.Item>
        <Dropdown.Item href="#/action-2" ><img  width="100%" src='https://i.pinimg.com/564x/9e/27/3b/9e273b761219e131981f8525c158a12b.jpg'></img></Dropdown.Item>
        <Dropdown.Item href="#/action-2" ><img width="100%" src='https://i.pinimg.com/564x/a7/ae/b3/a7aeb3f922240c4e8794a416ad8a0a46.jpg'></img></Dropdown.Item>
        <Dropdown.Item href="#/action-2" ><img  width="100%" src='https://i.pinimg.com/564x/89/6b/92/896b92aa6d9f30fd02cfce0d80008f33.jpg'></img></Dropdown.Item>


        </Dropdown.Menu>
    </Dropdown>
           
           <Dropdown color='white' >
      <Dropdown.Toggle variant="success" id="dropdown-basic">
  <em>Brands</em>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        
        <Dropdown.Item href="#/action-1" ><img width="100%" src='https://static.vecteezy.com/system/resources/previews/019/136/302/original/adidas-logo-adidas-icon-free-free-vector.jpg'></img></Dropdown.Item>
        <Dropdown.Item href="#/action-2" ><img width="100%" src='https://1000logos.net/wp-content/uploads/2021/10/Nivea-logo.jpg'></img></Dropdown.Item>
        <Dropdown.Item href="#/action-2" ><img width="100%" src='https://iconape.com/wp-content/png_logo_vector/hrx-logo.png'></img></Dropdown.Item>
        <Dropdown.Item href="#/action-2" ><img width="100%" src='https://pmdbeauty.com/cdn/shop/files/logo_acf675c8-5c15-4566-b80c-991026cd0c9e.png?v=1614288895'></img></Dropdown.Item>
        <Dropdown.Item href="#/action-2" ><img width="100%"  src='https://play-lh.googleusercontent.com/xEhJExMBAOHIUTYmSZ3vdT5Hyd5UwsG7qpHRQxUqVs6rBjfnpPGmQHplmeEWZk3q7Q=w240-h480-rw'></img></Dropdown.Item>
        <Dropdown.Item href="#/action-2" ><img width="100%" src='https://static.vecteezy.com/system/resources/previews/010/994/337/non_2x/puma-logo-black-symbol-with-name-clothes-design-icon-abstract-football-illustration-with-red-background-free-vector.jpg'></img></Dropdown.Item>
        <Dropdown.Item href="#/action-2" ><img width="100%" src='https://flipfit-cdn.akamaized.net/flip_pic/brand/6019d057bbf1ad00143176e5/1613417765839-.webp'></img></Dropdown.Item>
        <Dropdown.Item href="#/action-2" ><img width="100%" src='https://media.licdn.com/dms/image/C4E12AQG0cNSFpTRCww/article-cover_image-shrink_600_2000/0/1591535753989?e=2147483647&v=beta&t=5JX-BAB3b89kvUvez48FMI3bDZuPL_em21gTIcm-4zI'></img></Dropdown.Item>
        <Dropdown.Item href="#/action-2" ><img width="100%" src='https://cdn.iconscout.com/icon/free/png-256/free-nike-1-202653.png'></img></Dropdown.Item>

        </Dropdown.Menu>
    </Dropdown>
            
            <Dropdown id='profile'>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
    <strong> Profile</strong>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <h6>Hello anonymous❗</h6>
        <Dropdown.Item href="#/action-1" onClick={()=>{
           navigate("/Login")
        }}>Sin in</Dropdown.Item>
        <Dropdown.Item href="#/action-2" onClick={()=>{
          navigate("/Signup")
        }}>Add account</Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>
    <Link id='homecart' to="/Cart"> 🛒<strong>Cart</strong></Link>

<div id='end'>
    <>
      {[ 'end'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
    </div>


          </Nav>
        </Container>
      </Navbar>
   
    <div id='aboutimgs'>

      <Carousel data-bs-theme="dark">

      <Carousel.Item>
          <img className="d-block w-100"  src="https://pbs.twimg.com/media/D5ySA9nUYAAAzVP?format=jpg&name=4096x4096"/>
          <Carousel.Caption id='caption'>
          {/* <h1>Be a member of Nykaa squad</h1>
            <h6>THOSE WHO NEVER SETTLE FOR ANYTHING LESS</h6> */}
          </Carousel.Caption>
        </Carousel.Item>

 <Carousel.Item id='item'>
          <img className="d-block w-100" src="https://film-grab.com/wp-content/uploads/photo-gallery/Into_the_Spider-Verse_013.jpg?bwg=1569496332"/>
         <Carousel.Caption >
         
    </Carousel.Caption>
        </Carousel.Item>
       <Carousel.Item>
          <video className="d-block w-100" src='https://nexuscluster.blob.core.windows.net/server01/hrx/home/topvideo-vE5EuNdnxgL0Ck7fK5IGu-1655477435' controls ="" muted autoPlay loop ></video>
          <Carousel.Caption id='caption' >
            <h1><b>HRX</b></h1>
            <h3>FIND YOUR EDGE</h3>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel> 
  
    
  
      </div>
      
      <img id='homeimg' src='https://thoughtoverdesign.com/wp-content/uploads/2017/12/nykaa_section4.gif'></img>

<img id='shopeimgs' src='https://i.pinimg.com/564x/0b/c5/ae/0bc5ae044c11a8b53288e6f9a0316c1c.jpg'></img>
<img id='shopeimgs' src='https://i.pinimg.com/564x/9a/db/1e/9adb1e71f8c2e44f6d69f7a72ab64344.jpg'></img>
<img id='shopeimgs' src='https://i.pinimg.com/564x/df/c7/d3/dfc7d3754e562ee508ab8cdc75dde25b.jpg'></img>
<img id='shopeimgs' src='https://i.pinimg.com/564x/5e/83/eb/5e83ebce876263913083ffc90e7ab75f.jpg'></img>

    </div>
  
  )
}

export default Home