import React from 'react'
import services from '../appwrite/config';
import { Link } from 'react-router-dom';

function PostCard({ $id, description, title, slug, date, featured_image }) {

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
    return (
        <>
            <Link to={`/post/${slug}`}>
                <div id='blog-card' className='  sm:flex bg-zinc-800 mb-9 mx-auto'
                >
                    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 flex items-center '>
                        <img src={services.getFilePreview(featured_image)} alt='image' />
                    </div>

                    <div id='description-box'
                        className='p-4 sm:w-1/2 md:w-2/3'
                    >
                        <div id='title' className='mb-2'>
                            <h2 className='text-2xl font-semibold'>{title}</h2>
                        </div>
                        <div>
                            <p>{convertTextToDate(date).toLocaleDateString()}</p>
                        </div>
                        <div>
                            {/* <p className='text mt-2'>{'Building and Managing a Hosting Server for Your Website: A Comprehensive Guide Are you considering the idea of creating and managing your hosting server for…'}</p> */}
                            <p className='text-xl mt-2'>{description}</p>
                        </div>
                    </div>

                </div>
            </Link>
        </>
    )
}

export default PostCard