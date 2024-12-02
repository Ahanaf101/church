import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./holy.css"
function Holy() {
  return (
    <section>
        <div className="gray">
            <Container>
            <Row>
                <Col className='text-center' lg={12}>
                <p className='pt-[128px] pb-[20px] '>WATCH AND LISTEN</p>
                <h6 className='text-[40px] font-bold pb-[64px] ' >THE BENEFITS OF <br /> JOINING OUR CHURCH</h6>
                </Col>
               <div className="bang flex pb-[128px]">
               <Col  lg={3}>
                  <div className="sister mr-[24px]">
                    <p className='pt-[208px] px-[32px]  text-white text-[23px] font-bold' >WATCH AND LISTEN TO OUR SERMONS</p>
                    <p className=' text-white pl-[32px] font-thin' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
                  </div>
                 
                </Col>
                <Col lg={3}>
                 <div className="bible mr-[24px]">
                    <p className='pt-[262px] px-[32px] pb-[32px] text-[23px] font-bold text-white'>WATCH AND LISTEN TO OUR SERMONS</p>
                 </div>
                </Col>
                <Col lg={3}>
                    <div className="darkman mr-[24px]">
                            <p className='pt-[262px] px-[32px] pb-[32px] text-[23px] font-bold text-white'>WATCH AND LISTEN TO OUR SERMONS</p>
                    </div>
                </Col>
                <Col lg={3}>
                  <div className="photo mr-[24px]">
                    <p className='pt-[262px] px-[32px] pb-[32px] text-[23px] font-bold text-white'>WATCH AND LISTEN TO OUR SERMONS</p>
                  </div>
                </Col>
               </div>
            </Row>
        </Container>
        </div>
        
    </section>
  )
}

export default Holy