import React, { useState } from 'react'
import Container from './Container'
import Input from './form_components/Input'
import { useForm } from 'react-hook-form'
import Button from './form_components/Button'
import authServices from '../appwrite/auth'
import { useDispatch } from 'react-redux'
import { login } from '../store/authSlice'
import { useNavigate } from 'react-router-dom'

function Login() {
    const { register, handleSubmit, formState } = useForm()
    const [submissionError, setSubmissionError] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { errors } = formState

    const submit = async (data) => {
        try {
            const sessions = await authServices.login(data)
            if (sessions) {
                const userData = await authServices.getCurrentUser()
                if(userData){
                    dispatch(login(userData))
                    navigate('/')
                }
            }
            else{
                setSubmissionError('Some error occured. Try again later.')
            }
        } catch (error) {
            throw error
        }
    }
    return (
        <div>
            <Container>
                <div className='text-white w-2/5 mx-auto border border-gray-700 rounded-2xl bg-slate-900'>
                    <div className="mb-4 flex flex-col items-center mt-4">
                        <span className="inline-block w-fit text-xl">
                            ByteCodes Blog
                        </span>
                        <h2 className='text-3xl mt-4'>Login to your account</h2>
                        <span className='mt-2'>
                            Don't have an account? Sign Up
                        </span>
                    </div>

                    <form className='w-4/5 mx-auto' onSubmit={handleSubmit(submit)}>
                        <div>
                            <Input
                                type={'email'}
                                label='Email:-'
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


                        <div>
                            <Input
                                type={'password'}
                                label='Password:-'
                                placeholder='Enter your Password'
                                {...register('password', {
                                    required: {
                                        value: true,
                                        message: "Field is required",
                                    }
                                })}
                            />
                            {<span className='text-red-500'>&nbsp;{errors.password?.message}</span>}
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

export default Login