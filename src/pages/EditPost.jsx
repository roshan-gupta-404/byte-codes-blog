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
  
  // get the slug/urlPrams
  // get the post from it
  // set post to a variable and pass it to postForm
  const userData = useSelector((state) => state.user)
  console.log(userData);

  
  useEffect(() => {
    if (slug) {
      services.getPost(slug).then((post) => {
        console.log(typeof(post.user_id));
        console.log(typeof(userData.$id));
        if (post && (userData ? (post.user_id === userData.$id) : false)) {
          setPost(post)
        }
        else {
          console.log("user is not author of this post");
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