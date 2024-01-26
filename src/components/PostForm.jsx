import React, { useCallback, useEffect } from 'react'
import Input from './form_components/Input';
import Select from './form_components/Select';
import TextArea from './form_components/TextArea';
import Button from './form_components/Button';
import RTE from './form_components/RTE';
import { useForm } from 'react-hook-form';

function PostForm() {
    const { register, handleSubmit, control, formState, watch, setValue, getValues } = useForm()
    const { errors } = formState
    console.log(errors);
    const submit = (data) => {
        console.log(data);
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
            <form className='flex flex-wrap' onSubmit={handleSubmit(submit)}>
                <div className='w-2/3  my-2 px-4'>
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
                    />
                </div>

                <div className='w-1/3  my-2 px-4'>
                    <div className='my-2'>
                        <Input
                            label='Featured Image:-'
                            type='file'
                            className={`pt-1 text`}
                            {...register('featured_image', {
                                required: {
                                    value: true,
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
                            {...register('option', {
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