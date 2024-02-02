import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import PostForm from '../components/PostForm'
import { useNavigate, useParams } from 'react-router-dom'
import services from '../appwrite/config'
import { useSelector } from 'react-redux'

function EditPost() {
  const [post, setPost] = useState()
  const navigate = useNavigate()
  const { slug } = useParams()
  
  const userData = useSelector((state) => state.user)

  
  useEffect(() => {
    if (slug) {
      services.getPost(slug).then((post) => {
        if (post && (userData ? (post.user_id === userData.$id) : false)) {
          setPost(post)
        }
        else {
          navigate('/')
        }
      })
    }
    else {
      navigate('/')
    }
  }, [])

  return (post ? (<>
    <Container>
      <PostForm post={post} />
    </Container>
  </>) : null)
}

export default EditPost