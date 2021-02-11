import homepage1 from '../assets/images/homepage2.jpg';
// import { Container, Row, Col } from 'reactstrap';
import React from 'react';
import { Typewriter } from 'react-typewriting-effect'
import { Jumbotron, Button, Nav } from 'reactstrap';
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap';

const Jumbotron1 =  styled(Jumbotron)`
background: transparent;
background-image: linear-gradient(hsla(0,0%,100%,.5),hsla(0,0%,100%,.5)), url(${homepage1});
background-repeat:no-repeat;
background-attachment:fixed;
background-size:contain;
height:90vh;
background-position:center;
text-align:center;
`
function Home() {
 
  return (
    <Container fluid >
    <Row >
    <Col md="0" xl="3"></Col>
        <Col md="12" xl="5">     
        <Jumbotron1 fluid >
          <h1><Typewriter 	 string='Hello my name is Jonathan' delay={80} /></h1>
       
     </Jumbotron1></Col>
        <Col md="0" xl="4">
          About Me
        </Col>
    </Row>
    </Container>

    
  );
}

export default Home; 