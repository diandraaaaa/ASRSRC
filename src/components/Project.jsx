import React from 'react'
import Heading from './Heading'
import Paragraph from './Paragraph'
import Button from './Button'

function Project({title, text, onClick, image}) {
  return (

    <div className="flex max-w-4xl mx-auto border-[3px] border-[#27C25C] rounded-[10px]">
        <div className="w-1/3">
            <img src={image} alt="" className=' bg-gray-100 rounded-l-[10px]'/>
        </div>
        <div className="px-20">
            <Heading size="h2" weight="bold">{title}</Heading>
            <Paragraph weight="bold" size="large">{text}</Paragraph>
            <Button color="outline" onClick={onClick}>Read More</Button>
        </div>
    </div>

  )
}

export default Project