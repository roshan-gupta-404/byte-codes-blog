import React from 'react'
import Container from '../Container'
import { Link } from 'react-router-dom'

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
                    <Link to={"/"}>
                        <li className='mx-2'>
                            Home
                        </li>
                        </Link>
                        <Link to={"/signup"}>
                        <li className='mx-2'>
                            Sign Up
                        </li>
                        </Link>
                        <Link to={"/login"}>
                        <li className='mx-2'>
                            Login
                        </li>
                        </Link>
                    </ul>
                </div>

            </nav>
                </Container>
        </header>
    )
}

export default Header