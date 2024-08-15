import React from 'react'
import Heading from './Heading'
import Paragraph from './Paragraph'

function KeyPoint({title, text, icon, customClasses}) {
  return (
    <div className={`flex max-md:flex-col max-w-3xl py-8 items-center max-md:border-b-2  ${customClasses}`}>
        <div>
            <img src={icon} alt="" className="max-md:max-w-[128px] max-md:pt-10 max-md:pb-4 max-w-[168px]"/>
        </div>
        <div>
            <Heading color="black" weight="bold" size="h4">{title}</Heading>
            <Paragraph color="green" weight="medium" size="large" customClasses="m-4">{text}</Paragraph>
        </div>
    </div>
  )
}

export default KeyPoint