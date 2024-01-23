import React from 'react'
import Input from './form_components/Input'
import Container from './Container'

function Signup() {
    return (
        <div className='my-4'>
            <Container>
                <div className='text-white w-2/5 mx-auto border border-gray-700 rounded-2xl bg-slate-900'>
                    <div className="mb-2 flex flex-col items-center mt-4">
                        <span className="inline-block w-fit text-xl">
                            ByteCodes Blog
                        </span>
                        <h2 className='text-3xl mt-4'>Signup to create account</h2>
                        <span className='mt-2'>
                            Already have an account? Sign In
                        </span>
                    </div>

                    <form className='w-4/5 mx-auto'>
                        <Input
                            label='Name:-'
                            placeholder='Enter your name'
                        />
                        <Input
                            label='Email:-'
                            placeholder='Enter your Email'
                        />
                        <Input
                            label='Password:-'
                            placeholder='Enter your Password'
                        />
                        <Input
                            label='Auth Key:-'
                            placeholder='Enter your Auth Key'
                        />
                    </form>
                </div>
            </Container>

        </div>
    )
}

export default Signup