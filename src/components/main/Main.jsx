import React, { useEffect, useState } from 'react'
import Container from '../Container'
import PostCard from '../PostCard'
import services from '../../appwrite/config'
// import img1 from './img1.jpeg'
// import { useSelector } from 'react-redux'
// import authServices from '../../appwrite/auth'

function Main() {
    const [posts, setPosts] = useState([])
    const [loading , setLoading] = useState('Loading...')

    useEffect(()=>{
        services.getAllPosts().then((post) => {
            if(post){
                setPosts(post.documents)
            }
            else{
                setLoading('Signup/Login to see blogs...')
            }
        }).catch((err) => {
            throw err
        });
    },[])
    return ( (posts?.length) ? (<div className='text-white my-4'>
    <Container>
        <div id='blog-card-container'
        className='w-3/4  mx-auto'
        >
            {posts.map((post)=>(
                <div key={post.$id}>
                <PostCard {...post}/>
                </div>
            ))}
        </div>
    </Container>
</div>): (<div className='text-white my-4'>
            <Container>
                <div id='blog-card-container'
                className='w-3/4 flex justify-center mx-auto'
                >
                   {loading}
                </div>
            </Container>
        </div>)
        
    )
}

export default Main