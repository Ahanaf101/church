import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Lasttextreusable from '../reusable/Lasttextreusable'

function Lasttext() {
  return (
    <section>
        <Container>
            <Row>
                <Col className='text-center' lg={12}>
                <p className='pt-[223px]' >READ OUR BLOG</p>
                <h6 className='text-[40px] font-bold pt-[16px] pb-[64px] ' >SHARE,INSPIRE,INNOVATE</h6>
                </Col>
                <div className="kha flex pb-[143px]">
                     <Lasttextreusable/>
                <Lasttextreusable/>
                <Lasttextreusable/>
                </div>
               
                
            </Row>
        </Container>
    </section>
  )
}

export default Lasttext