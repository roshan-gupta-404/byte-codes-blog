import React from 'react'
import services from '../appwrite/config';
import { Link } from 'react-router-dom';

function PostCard({$id, description, title, slug, date, featured_image}) {

    // FUNCTION TO CONVERT DATE STRING INTO JS DATE OBJECT TO REMOVE TIME.
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
      console.log(services.getFilePreview(featured_image));
    return (
        <>
        <Link to={`/post/${slug}`}>
        <div id='blog-card'
                className='flex bg-zinc-800 mb-9'
            >
                <div className='w-1/3 p-4'>
                    <img src={services.getFilePreview(featured_image)} alt='image' />
                </div>

                <div id='description-box'
                    className='p-4'
                >
                    <div id='title' className='mb-2'>
                        <h2 className='text-3xl'>{title}</h2>
                    </div>
                    <div>
                        <p>{convertTextToDate(date).toLocaleDateString()}</p>
                    </div>
                    <div>
                        <p className='text-xl mt-2'>{description}</p>
                    </div>
                </div>

            </div>
        </Link>
        </>
    )
}

export default PostCard