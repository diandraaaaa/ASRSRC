import React from 'react'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();
  return (
    <div className=" py-32 text-center">
        <div className=" flex justify-center">
            <div className="px-24">
                <Heading weight="bold" size="title" color="primary">404</Heading>
                <Paragraph color="gray" size="large">Looks like you're lost</Paragraph>
            </div>
        </div>
            <Button color="primary" size="small" onClick={() => navigate('/')}>Go back</Button>  
    </div>
  )
}

export default Error