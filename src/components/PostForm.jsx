import React, { useCallback, useEffect } from 'react'
import Input from './form_components/Input';
import Select from './form_components/Select';
import TextArea from './form_components/TextArea';
import Button from './form_components/Button';
import RTE from './form_components/RTE';
import { useForm } from 'react-hook-form';
import services from '../appwrite/config';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function PostForm({post}) {
    const { register, handleSubmit, control, formState, watch, setValue, getValues } = useForm({
                                                                                                defaultValues: {
                                                                                                    title: post?.title || '',
                                                                                                    slug: post?.slug || '',
                                                                                                    content: post?.content || '',
                                                                                                    status: post?.status || 'active',
                                                                                                    description: post?.description || '',
                                                                                                }
    })
    const { errors } = formState // this cause rerendering of component when form is submitted.
    const userData = useSelector((state) => state.user)

    const navigate = useNavigate()

    const submit = async (data) => {
        if(post){
            // if post is recieved as a param then this means we have to update the post
            const file = await (data.featured_image[0]? services.uploadFile(data.featured_image[0]):null)
            if(file){
                // deleting the old image
                await services.deleteFile(post.featured_image)
            }
            const updatePost = await services.updatePost(post.$id,{...data, featured_image:file? file.$id: undefined}) // TODO: check its working
            if (updatePost) {
                navigate(`/post/${updatePost.$id}`)     // agar ./post/dbpost.id denge to wo current page ke ander post/dbpost.id dhundhega.
            }
        }
        else{
            try {
                // first uplaod image.
                const file = await services.uploadFile(data.featured_image[0])    
                // then upload post.
                if (file) {
                    data.featured_image = file.$id;
                    const postUploaded = await services.createPost({ ...data, user_id: userData.$id, date: (new Date().toLocaleString()) })
                    if (postUploaded) {
                       navigate(`/post/${postUploaded.slug}`) 
                    }
                }
            } catch (error) {
                throw error
            }
        }
    }

    const slugTransform = useCallback((value) => {
        if (value && typeof value === 'string') {
            return value.trim().toLowerCase()
                .replace(/^[a-zA-Z\d\s] + /g, '-')  // giving regex values.
                .replace(/\s/g, '-')                 // giving regex values.
        }
        return ''
    }, [])

    useEffect(() => {
        const subscription = watch((value, { name }) => {         // storing watch() in subscription to optimize
            if (name === 'title') {
                setValue('slug', slugTransform(value.title, { shouldValidate: true }))
            }
        })

        return () => {
            subscription.unsubscribe()
        }
    }, [watch, slugTransform, setValue])
    return (
        <>
            <form className='flex flex-col md:flex-row' onSubmit={handleSubmit(submit)}>
                <div className='md:w-2/3  my-2 px-4'>
                    <div className='my-2'>
                        <Input
                            label='Title:-'
                            placeholder='Title'
                            {...register('title', {
                                required: {
                                    value: true,
                                    message: "Field is required",
                                },
                            })}
                        />
                        {<span className='text-red-500'> &nbsp; {errors.title?.message}</span>}
                    </div>

                    <div className=''>
                        <Input
                            disableStatus={true}
                            label='Slug:-'
                            placeholder='Slug'
                            {...register('slug', {
                                required: {
                                    value: true,
                                    message: "Field is required",
                                },
                            })}
                            onInput={(e) => {
                                setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                            }}
                        />
                        {<span className='text-red-500'> &nbsp; {errors.slug?.message}</span>}
                    </div>

                    <RTE
                        label={'Content:-'}
                        name={'content'}
                        control={control}
                        defaultValue={getValues('content')}
                    />
                </div>

                <div className='md:w-1/3  my-2 px-4'>
                    <div className='my-2'>
                        <div className='sm:w-full rounded-xl overflow-hidden mx-auto'>
                        {post && <img src={services.getFilePreview(post.featured_image)} />}
                        </div>
                    </div>
                    <div className='my-2'>
                        <Input
                            label='Featured Image:-'
                            type='file'
                            className={`pt-1`}
                            {...register('featured_image', {
                                required: {
                                    value: !post,
                                    message: "Field is required",
                                },
                            })}
                        />
                        {<span className='text-red-500'> &nbsp; {errors.featured_image?.message}</span>}
                    </div>

                    <div className=''>
                        <Select
                            options={["Active", "Inactive"]}
                            label={'Status:-'}
                            {...register('status', {
                                required: {
                                    value: true,
                                    message: "Field is required",
                                },
                            })}
                        />
                        {<span className='text-red-500'> &nbsp; {errors.option?.message}</span>}
                    </div>

                    <div className='mb-2'>
                        <TextArea
                            placeholder={'Description'}
                            className=''
                            label={'Description:-'}
                            {...register('description', {
                                required: {
                                    value: true,
                                    message: "Field is required",
                                },
                            })}
                        />
                        {<span className='text-red-500'> &nbsp; {errors.description?.message}</span>}
                    </div>
                    <Button
                        className={`text-white text-2xl font-semibold bg-blue-700 w-full p-1 rounded-md hover:bg-blue-800`}
                    >
                        {'Submit'}
                    </Button>
                </div>
            </form>
        </>
    )
}

export default PostForm