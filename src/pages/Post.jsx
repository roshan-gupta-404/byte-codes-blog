import React, { useEffect, useState } from 'react'
import {Container} from '../components/Index'
import { Link, useNavigate, useParams } from 'react-router-dom'
import services from '../appwrite/config'
import parse from 'html-react-parser';
import { useSelector } from 'react-redux';
import Button from '../components/form_components/Button';
import '../postPage.css'

function Post() {
    const {slug} = useParams()
    const [post, setPost] = useState()
    const[loader, setLoader] = useState(true)
    const navigate = useNavigate()

    const userData = useSelector((state) => state.user);
    const isAuthor = post && (userData ? post.user_id === userData.$id : false);

    function convertTextToDate(dateText) {
        // Parse the date text into a JavaScript Date object
        const parsedDate = new Date(dateText);
      
        // Check if the parsed date is valid
        if (isNaN(parsedDate.getTime())) {
          // If the parsed date is invalid, return null or throw an error
          return null;
        }
      
        return parsedDate;
      }

    function deletePost(){
       services.deletePost(post.slug).then((status)=>{
        if(status){
            services.deleteFile(post.featured_image).then(()=>{
                navigate('/')
            })
        }
       })
       .catch((err)=>{
        throw err
       })
        
    }
    useEffect(()=>{
        services.getPost(slug).then((post) => {
            if(post){
                setPost(post)
                setLoader(false)
            }
        }).catch((err) => {
            throw err
        });
    },[])

    return ( loader ? (<div className='text-white my-4'>
    <Container>
        <div id='blog-card-container'
        className='w-3/4 flex justify-center mx-auto'
        >
           Loading...
        </div>
    </Container>
</div>) : (<>
            <div className='text-white'>
                <Container>
                    <div className=''>
                        <div className='relative bg-slate-800 h-56 flex flex-col items-center pt-14'>
                        {isAuthor && (
                        <div className="absolute right-20 top-20">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button className={`bg-green-700 w-16 mb-2 rounded-xl`}>
                                    Edit
                                </Button>
                            </Link>

                            <Button className={`bg-red-700 w-16 mt-2 rounded-xl`} onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                            <h1 className='text-3xl font-semibold font-mono mb-4'>{post.title}</h1>
                            <p className='font-thin text-sm'>{convertTextToDate(post.date).toLocaleDateString()}</p>
                        </div>
                        <div className='bg-slate-900 flex flex-col items-center pt-40'>
                            <div className=' max-w-80 absolute -translate-y-60 rounded-xl overflow-hidden'>
                                <img src={services.getFilePreview(post.featured_image)} />
                            </div>
                            <div className='w-3/4 mt- mb-8 '>
                               {parse(post.content)}
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>)
    )
}

export default Post