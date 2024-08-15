import React from 'react'
import Heading from './Heading'
import Input from './Input'
import Paragraph from './Paragraph'


function Newsletter({position}) {
  return (
    <div className="py-20 w-screen bg-gradient-2">
      { position === 'left' ? 
      (   <div className="text-left max-w-md ml-10 space-y-3">
            <Heading size="h1" weight="bold" customClasses="m-0">Newsletter</Heading>
            <Heading size="h6" weight="semibold" customClasses="m-0">Abonează-te la newsletter-ul nostru</Heading>
            <Input type="email" placeholder="Email" color="primary" width="96"  icon="send"/>
            <Paragraph color="gray" size="small" customClasses="max-w-md">Nici nouă nu ne place spam, te informăm doar despre oportunități de implicare,proiecte și activități utile</Paragraph>
          </div>)
        : 
        (
          <div className="text-center mx-auto max-w-md space-y-3">
            <Heading color="black" size="h1" weight="bold" customClasses="m-0">Newsletter</Heading>
            <Heading color="black" size="h6" weight="semibold" customClasses="m-0">Abonează-te la newsletter-ul nostru</Heading>
            <Input type="email" placeholder="Email" color="primary" width="64" position="mx-auto" icon="send"/>
            <Paragraph color="gray" size="small" customClasses="max-w-md">Nici nouă nu ne place spam, te informăm doar despre oportunități de implicare,proiecte și activități utile</Paragraph>
          </div>
        )}
        
    </div>
  )
}

export default Newsletter