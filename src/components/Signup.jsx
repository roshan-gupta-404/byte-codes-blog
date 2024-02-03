import React, { useState } from 'react'
import Input from './form_components/Input'
import Container from './Container'
import Button from './form_components/Button'
import { useForm } from 'react-hook-form'
import authServices from '../appwrite/auth'
import { useDispatch } from 'react-redux'
import {login} from '../store/authSlice'
import { useNavigate } from 'react-router-dom'

function Signup() {
    // (async ()=>{
    //     const currentUser = await authServices.getCurrentUser()
    //     console.log(currentUser);
    // })()
    const {register, handleSubmit, formState} = useForm()
    const [submissionError , setSubmissionError] = useState()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {errors} = formState

    const submit = async(data)=>{
        setSubmissionError("")
       const user = await authServices.createAccount(data)
       if(user){
        const userData = await authServices.getCurrentUser()
        if(userData){
            // TODO: dispatch user data
            dispatch(login({userData}))
            // navigate the user to home
            navigate('/')
        }
       }
       console.log(data)
    }
    
    return (
        <div className='my-6'>
            <Container>
                <div className='text-white w-2/5 mx-auto border border-gray-700 rounded-2xl bg-slate-900'>
                    <div className="mb-4 flex flex-col items-center mt-4">
                        <span className="inline-block w-fit text-xl">
                            ByteCodes Blog
                        </span>
                        <h2 className='text-3xl mt-4'>Signup to create account</h2>
                        <span className='mt-2'>
                            Already have an account? Sign In
                        </span>
                    </div>

                    <form className='w-4/5 mx-auto' onSubmit={handleSubmit(submit)}>
                        <Input
                            label='Name:-'
                            placeholder='Enter your name'
                            {...register('name',{
                                    required: {
                                        value: true,
                                        message: "Field is required",
                                    },
                                })}
                        />
                        {<span className='text-red-500'> &nbsp; {errors.name?.message}</span>}
                        <Input
                            label='Email:-'
                            type={'email'}
                            placeholder='Enter your Email'
                            {...register('email',{
                                    required: {
                                        value: true,
                                        message: "Field is required",
                                    },
                                })}
                        />
                        {<span className='text-red-500'> &nbsp; {errors.email?.message}</span>}
                        <Input
                            label='Password:-'
                            type={'password'}
                            placeholder='Enter your Password'
                            {...register('password',{
                                    required: {
                                        value: true,
                                        message: "Field is required",
                                    },
                                })}
                        />
                        {<span className='text-red-500'> &nbsp; {errors.password?.message}</span>}
                        <Input
                            label='Auth Key:-'
                            placeholder='Enter your Auth Key'
                            {...register('auth_key',{
                                    required: {
                                        value: true,
                                        message: "Field is required",
                                    },
                                })}
                        />
                        {<span className='text-red-500'> &nbsp; {errors.auth_key?.message}</span>}
                        <Button
                            className={`text-white text-2xl block font-semibold my-4 bg-blue-700 w-1/2 mx-auto p-1 rounded-md hover:bg-blue-800`}
                        >
                            {'Submit'}
                        </Button>
                    </form>
                </div>
            </Container>

        </div>
    )
}

export default Signup