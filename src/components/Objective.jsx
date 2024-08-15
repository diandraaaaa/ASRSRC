import React from 'react'
import Heading from './Heading'
import Paragraph from './Paragraph'

function Objective({title, text, number}) {
  return (
    <div className="w-full text-center">
        <div className="flex justify-center items-center bg-gradient-3 size-24 mx-auto rounded-full">
            <Heading size="h1" color="white" weight="black">{number}</Heading>
        </div>
        <Heading color="black" weight="bold" size="h4">{title} {number}</Heading>
        <Paragraph customClasses="px-12 xl:px-20" position="mx-auto" color="black">{text}</Paragraph>

        
    </div>
  )
}

export default Objective