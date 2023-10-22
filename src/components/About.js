import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';



function About() {
  return (
   
    <div id='aboutimgs'>
      

    <Carousel data-bs-theme="dark">

      
    <Carousel.Item>
        <img className="d-block w-100" src="https://pbs.twimg.com/media/D5ySBVjV4AUhL9S?format=jpg&name=4096x4096"/>
        <Carousel.Caption id='caption'>
        <Link to="/"id='shopLink' >Shop Now</Link>
        </Carousel.Caption>
      </Carousel.Item>

      
      <Carousel.Item>
        <img className="d-block w-100" src="https://nexuscluster.blob.core.windows.net/server01/hrx/HRX/kabir.png"/>
        <Carousel.Caption id='caption'>
          <h1><b>Hrithik Roshan</b>.</h1>
          <h3>THOSE WHO NEVER SETTLE FOR ANYTHING LESS</h3>
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
  )
}

export default About