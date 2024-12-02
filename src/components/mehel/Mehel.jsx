import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./mehel.css"
function Mehel() {
  return (
    <section>
        <div className="mehel pb-[20px]">
            <Container>
                <Row>
                    <Col lg={8}>
          <div className="mehelbg mt-[128px] pt-[128px] ml-[300px]  w-[900px]  ">
                        <p className='pr-[50px] pl-[48px] text-[40px] font-bold'>WE WANT TO <br /> SERVE THE WORLD <br /> AROUND US </p>
                        <p className='pl-[48px]  pb-[32px]'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do.</p>
                        <div className="sll pl-[48px]   pb-[74px]">
                          <a className=' no-underline text-black py-[24px] px-[64px] rounded-[10px] bg-orange-200'  href="#">VISIT</a>
                        </div>
                      </div>
                      <div className="solid h-[20px] w-[900px]  ml-[300px]   ">

                      </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </section>
  )
}

export default Mehel