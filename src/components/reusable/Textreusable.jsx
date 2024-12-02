import React from 'react'
import { Col } from 'react-bootstrap'

function Textreusable({img,heading,text}) {
  return (
    <Col  lg={4}>
        <div className="ss bg-orange-100">
            <img className='pt-[80px] pl-[80px] pb-[24px]' src={img} alt="" />
        <h2 className='pl-[80px] pb-[8px]'>{heading}</h2>
        <p className='pl-[80px] pb-[80px] pr-[60px]'>{text}</p>
         <div className="sdss h-[20px] bg-orange-200"></div>
        </div>
        
    </Col>
  )
}

export default Textreusable