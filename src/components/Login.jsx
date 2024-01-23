import React from 'react'
import Container from './Container'
import Input from './form_components/Input'
import { useForm } from 'react-hook-form'
import Button from './form_components/Button'

function Login() {
    const {register, handleSubmit} = useForm()
    const submit = async(data)=>{
        console.log(data);
    }
    return (
        <div>
            <Container>
                <div className='text-white w-2/5 mx-auto border border-gray-700 rounded-2xl bg-slate-900'>
                    <div className="mb-2 flex flex-col items-center mt-4">
                        <span className="inline-block w-fit text-xl">
                            ByteCodes Blog
                        </span>
                        <h2 className='text-3xl mt-4'>Login to your account</h2>
                        <span className='mt-2'>
                            Don't have an account? Sign Up
                        </span>
                    </div>

                    <form className='w-4/5 mx-auto' onSubmit={handleSubmit(submit)}>
                        <Input
                            type={'email'}
                            label='Email:-'
                            placeholder='Enter your Email'
                            {...register('email')}
                        />
                        <Input
                            type={'password'}
                            label='Password:-'
                            placeholder='Enter your Password'
                            {...register('password')}
                        />
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

export default Login