import React from 'react'
import Container from '../Container'

function Header() {
    return (
        <header className='bg-gray-950 text-white  text-2xl'>
            <Container>
            <nav className='flex justify-between  py-3 '>

                <div className='ml-2'>
                    ByteCodes Blog
                </div>

                <div className=''>
                    <ul className='flex ml-auto'>
                        <li className='mx-2'>
                            Home
                        </li>
                        <li className='mx-2'>
                            All Post
                        </li>
                        <li className='mx-2'>
                            Login
                        </li>
                    </ul>
                </div>

            </nav>
                </Container>
        </header>
    )
}

export default Header