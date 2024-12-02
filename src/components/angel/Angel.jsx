import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./angel.css"
import { IoTime } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import angel from "../../assets/hadu.jpg"
import { FaArrowRight } from "react-icons/fa";
function Angel() {
  return (
   <section>
    <Container>
        <Row>
            <Col className='text-center' lg={12}>
            <p className='pt-[128px] pb-[16px]'>UPCOMING SERMONS</p>
            <h6 className='text-[40px] font-bold pb-[64px]'>JOIN US AND BECOME A PART <br /> OF OUR SOMETHING GREAT</h6>
            </Col>
                             <Col lg={4}>
            <div className="chol">

            <div className="event flex">
                 <p className='pt-[80px] text-orange-300 font-semibold pl-[80px]'>UPCOMING EVENT</p>
                 <p className='ml-[100px]  text-[25px] font-bold pt-[32px]  pr-[0px]'>20 <br />
                  <span className='font-medium '>JULY</span> </p>

            </div>
               
            <p className='pl-[80px] pt-[16px] pb-[16px] text-[25px] font-bold'>WATCH AND LISTEN <br /> TO OUR SERMONS</p>
            <p className='pb-[22px] pl-[80px]'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor.</p>
            <div className="time flex">
                 <IoTime className='size-7 ml-[73px]'  />
                 <div className="tiii ml-3">
                    <p>Friday 23:39 IST <br /> No 233 Main St. New York, United States</p>
                 
                 </div>
                
            </div>
            <div className="time flex">
            <FaMapMarkerAlt className='size-7 ml-[73px]' />
                 <div className="tiii ml-3">
                   
                    <p >No 233 Main St. New York, <br /> United States</p>
                 </div>
                
            </div>
            <div className="res pt-[32px] pl-[80px] pb-[64px]">
                <a className='py-[24px] px-[64px] rounded-[15px] bg-[black] text-amber-500' href="#">REGISTER</a>
            </div>
            </div>
           
            </Col>
            <Col  lg={8}>
                    <img className='w-[100%] h-[100%] ' src={angel} alt="" />
            </Col>
            <Col className='' lg={12}>
            <div className="ok flex justify-end pt-[32px]">
                   <p>View all Sermons</p>
            <FaArrowRight className='mt-1 ml-3' />
            </div>
         
           
            </Col>
        </Row>
    </Container>
   </section>
  )
}

export default Angel