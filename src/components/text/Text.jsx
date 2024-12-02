import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Textreusable from '../reusable/Textreusable'
import iconone from "../../assets/Iconone.png"
import icontwo from "../../assets/Icontwo.png"
import iconthree from "../../assets/Iconthree.png"
function Text() {
  return (
   <section>
    <Container>
        <Row>
            <Col lg={12}>
            <p className='text-center pt-[128px] pb-[16px] '>SUB-HEADLINE</p>
            <h6 className='text-center text-[50px] font-bold pb-[64px]'>A CHURCH THAT'S RELEVANT</h6>
            </Col>
            <Textreusable img={iconone} heading="ABOUT US" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            <Textreusable img={icontwo} heading="GET INVOLVED" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            <Textreusable img={iconthree} heading="GIVING BACK" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
        </Row>
    </Container>
   </section>
  )
}

export default Text