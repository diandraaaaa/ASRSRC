import React from 'react'

import Heading from '../components/Heading';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';

function Home() {
  return (
    <div className="text-center">
        <Heading color="black" size="h1" weight="bold">Hello World!</Heading>
        <Button color="primary" size="small">Click Me</Button>
        <Paragraph underline="true" width="half" size="normal" customClasses="mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat blanditiis numquam hic placeat, nisi ut mollitia quis commodi repellendus, iure quae magnam consequatur facere saepe dolorum, amet praesentium cupiditate nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat blanditiis numquam hic placeat, nisi ut mollitia quis commodi repellendus, iure quae magnam</Paragraph>
    </div>
  );
}

export default Home;


