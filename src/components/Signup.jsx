import React, { useState } from 'react'
import Input from './form_components/Input'
import Container from './Container'
import Button from './form_components/Button'
import { useForm } from 'react-hook-form'
import authServices from '../appwrite/auth'
import { useDispatch } from 'react-redux'
import { login } from '../store/authSlice'
import { Link, useNavigate } from 'react-router-dom'
import conf from '../conf/conf'

function Signup() {
    const { register, handleSubmit, formState } = useForm()
    const [submissionError, setSubmissionError] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { errors } = formState

    const submit = async (data) => {
        if (data.auth_key === conf.authKey) {
            setSubmissionError("")
            const user = await authServices.createAccount(data)
            if (user) {
                const userData = await authServices.getCurrentUser()
                if (userData) {
                    dispatch(login({ userData }))
                    navigate('/')
                }
            }
            else {
                setSubmissionError("Some error occured. Try again later.")
            }
        }
        else{
            setSubmissionError('Auth Key Invalid')
        }

    }

    return (
        <div className='my-6'>
            <Container>
                <div className='text-white w-4/5 sm:w-2/5 mx-auto border border-gray-700 rounded-2xl bg-slate-900'>
                    <div className="mb-4 flex flex-col items-center mt-4">
                        <span className="inline-block w-fit text-xl">
                            ByteCodes Blog
                        </span>
                        <h2 className='text-xl mt-4'>Signup to create account</h2>
                        <span className='text-xs sm:text-sm mt-2'>
                        <Link to={'/login'}>Already have an account? Sign In</Link>
                        </span>
                    </div>

                    <form className='w-4/5 mx-auto' onSubmit={handleSubmit(submit)}>
                        <div className='mb-2'>
                            <Input
                                label='Name:-'
                                placeholder='Enter your name'
                                {...register('name', {
                                    required: {
                                        value: true,
                                        message: "Field is required",
                                    },
                                })}
                            />
                            {<span className='text-red-500'> &nbsp; {errors.name?.message}</span>}
                        </div>
                        <div className='mb-2'>
                            <Input
                                label='Email:-'
                                type={'email'}
                                placeholder='Enter your Email'
                                {...register('email', {
                                    required: {
                                        value: true,
                                        message: "Field is required",
                                    },
                                })}
                            />
                            {<span className='text-red-500'> &nbsp; {errors.email?.message}</span>}
                        </div>
                        <div className='mb-2'>
                            <Input
                                label='Password:-'
                                type={'password'}
                                placeholder='Enter your Password'
                                {...register('password', {
                                    required: {
                                        value: true,
                                        message: "Field is required",
                                    },
                                })}
                            />
                            {<span className='text-red-500'> &nbsp; {errors.password?.message}</span>}
                        </div>
                        <div className='mb-2'>
                            <Input
                                label='Auth Key:-'
                                placeholder='Enter your Auth Key'
                                {...register('auth_key', {
                                    required: {
                                        value: true,
                                        message: "Field is required",
                                    },
                                })}
                            />
                            {<span className='text-red-500'> &nbsp; {errors.auth_key?.message}</span>}
                        </div>
                        <Button
                            className={`text-white text-2xl block font-semibold my-4 bg-blue-700 w-1/2 mx-auto p-1 rounded-md hover:bg-blue-800`}
                        >
                            {'Submit'}
                        </Button>
                    </form>
                </div>
                {submissionError && <div className='text-red-600 text-xl w-fit mx-auto my-6'>{submissionError}</div>}
            </Container>

        </div>
    )
}

export default Signup