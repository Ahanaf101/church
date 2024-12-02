import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import banner from "../../assets/banner.jpg"
import "./banner.css"
function Banner() {
  return (
   <section>
    <div className="banner" >
        <Container>
            <Row>
                <Col lg={6}>
                <p className='pt-[128px] pb-[16px] text-white'>WELCOME TO OUR CHURCH</p>
                <h1 className='text-[64px] font-bold text-white pb-[38px] '>BECOME A PART OF OUR COMMUNITY</h1>
                <div className="button pt-[20px] pb-[56px] ">
        <a className='kk no-underline text-black py-[20px] px-[48px] rounded-[20px] bg-' href="#">CONTACT US</a>
      </div>
                <p className='text-white pb-[128px]'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do.</p>
                </Col>
            </Row>
        </Container>
    </div>
   </section>
  )
}

export default Banner