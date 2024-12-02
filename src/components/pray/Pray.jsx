import React from 'react'
import prayone from "../../assets/prayone.png"
import praytwo from "../../assets/praytwo.png"
import praythree from "../../assets/praythree.png"
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from "react-icons/fa";
function Pray() {
  return (
  <section>
    <Container>
        <Row>
            <Col lg={12}>
            <p className='pt-[128px] pb-[16px] text-center ' >SUB-HEADING</p>
            <h1 className='pb-[32px] text-[40px] text-center font-bold'>LOVE AND COMPASSION</h1>
            <p className='pb-[56px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <div className="butt text-center">
              <a className='text-black no-underline py-[18px] px-[50px] rounded-[10px] bg-orange-200 ' href="#">READ MORE</a>
            </div>
            </Col>
            <Col lg={{span:3,offset:1}}>
            <img src={prayone} alt="" />
            </Col>
            <Col lg={4}>
            <img className='mt-[60px]' src={praytwo} alt="" />
            </Col>
            <Col lg={4}>
            <img src={praythree} alt="" />
            </Col>
            <Col className='text-center' lg={12}>
            <p className='pt-[64px] pb-[16px]'>OUR MISSION & VISION</p>
            <h6 className='pb-[16px] text-[25px] font-bold'>CELEBRATE WITH US</h6>
            <p className='pb-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.</p>
            <div  className="gol flex justify-center pb-[128px] ">
              <a className='no-underline text-black' href="#">Read More</a>
              <FaArrowRight className='mt-1 ml-3' />
            </div>
            </Col>
        </Row>
    </Container>
  </section>
  )
}

export default Pray