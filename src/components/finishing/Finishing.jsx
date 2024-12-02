import React from 'react'
import { Col, Container } from 'react-bootstrap'
import lastlogo from "../../assets/lastlogo.png"
import facebook from "../../assets/facelast.png"
import twitter from "../../assets/twitterlast.png"
import linkdin from "../../assets/linklast.png"
function Finishing() {
  return (
    <section>
        <div className="last bg-hola">
            <Container>
                <div className="lastflex flex">
                     <Col lg={4}>
                    <img className='pt-[64px] pb-[16px]' src={lastlogo} alt="" />    
                    <p className='pb-[32px] text-white'>© Copyright Finsweet 2022</p> 
                    <p className='pb-[16px]  text-white' >(480) 555-0103</p>   
                    <p className='pb-[16px] text-white' >4517 Washington Ave. </p>        
                    <p className='pb-[72px] text-white' >finsweet@example.com</p>
                    
                </Col>
                <Col lg={1}>
                    <p className='pt-[64px] pb-[20px] text-white' >Quicklinks</p>
                    <p className='pb-[20px] text-white'>About us</p>
                    <p className='pb-[20px] text-white'>Sermons</p>
                    <p className='pb-[20px] text-white'>Events</p>
                    <p className='pb-[72px] text-white'>Blog</p>                
                </Col>
                <Col lg={{span:1,offset:1}}>
                <p className='text-white pt-[64px]'>Connect</p>
                <div className="facelast flex justify-between">
                    <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={linkdin} alt="" />
                </div>
                
                </Col>
                <Col lg={{span:4,offset:1}}>

                    <p className='text-[40px] font-bold text-white pt-[50px] '>SUBSCRIBE TO GET LATEST  UPDATES AND NEWS</p>
                    <div className="inpuut flex">
                        <input className='py-[25px] px-[100px] border-[1px] border-gray-700  bg-gray-500 rounded-l-lg '  type="text" placeholder='Yourmail@gmail.com' />
                        <a className='px-[45px] py-[23px]  bg-orange-300 no-underline text-black rounded-r-lg ' href="#">SUBSCRIBE</a>
                    </div>
                        
                </Col>
                </div>
               
            </Container>
        </div>
    </section>
  )
}

export default Finishing