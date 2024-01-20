import React from 'react'
import Container from '../Container'
import img1 from './img1.jpeg'

function Main() {
  return (
    <div className='text-white'>
        <Container>
            <div id='blog-card-container'>
            <div id='blog-card'
            className=''
            >
            <div>
                <img src={img1} alt='image'/>
            </div>
            </div>
            </div>
        </Container>
    </div>
  )
}

export default Main