import React from 'react'

function PostCard() {
  return (
    <>
        <div id='blog-card'
                        className='flex bg-zinc-800'
                    >
                        <div className='w-1/3 p-4'>
                            <img src="images/img1.jpeg" alt='image' />
                        </div>

                        <div id='description-box'
                        className='p-4'
                        >
                            <div id='title' className='mb-2'>
                                <h2 className='text-3xl'>Lorem Ispum</h2>
                            </div>
                            <div>
                                <p>Date and Author</p>
                            </div>
                            <div>
                            <p className='text-xl mt-2'>Building and Managing a Hosting Server for Your Website: A Comprehensive Guide Are you considering the idea of creating and managing your hosting server for…</p>
                            </div>
                        </div>

                    </div>
                    <div id='blog-card'
                        className='flex bg-zinc-800 my-9'
                    >
                        <div className='w-1/3 p-4'>
                            <img src="images/img1.jpeg" alt='image' />
                        </div>

                        <div id='description-box'
                        className='p-4'
                        >
                            <div id='title' className='mb-2'>
                                <h2 className='text-3xl'>Lorem Ispum</h2>
                            </div>
                            <div>
                                <p>Date and Author</p>
                            </div>
                            <div>
                            <p className='text-xl mt-2'>Building and Managing a Hosting Server for Your Website: A Comprehensive Guide Are you considering the idea of creating and managing your hosting server for…</p>
                            </div>
                        </div>

                    </div>
    </>
  )
}

export default PostCard