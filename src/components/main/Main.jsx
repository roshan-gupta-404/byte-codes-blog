import React, { useEffect } from 'react'
import Container from '../Container'
import PostCard from '../PostCard'
// import img1 from './img1.jpeg'
// import { useSelector } from 'react-redux'
// import authServices from '../../appwrite/auth'

function Main() {
    
    return (
        <div className='text-white my-4'>
            <Container>
                <div id='blog-card-container'
                className='w-3/4 border mx-auto'
                >
                    <PostCard/>
                </div>
            </Container>
        </div>
    )
}

export default Main