import React from 'react'
import Container from './Container'
import Input from './form_components/Input'

function Login() {
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

                    <form className='w-4/5 mx-auto'>
                        <Input
                            type={'email'}
                            label='Email:-'
                            placeholder='Enter your Email'
                        />
                        <Input
                            label='Password:-'
                            placeholder='Enter your Password'
                        />
                    </form>
                </div>
            </Container>
        </div>
    )
}

export default Login