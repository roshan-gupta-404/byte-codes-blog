import React from 'react'
import Container from '../Container'
import { Link } from 'react-router-dom'
import LogoutBtn from './LogoutBtn'
import { useSelector } from 'react-redux'

function Header() {
    const authStatus = useSelector((state)=>state.status)
    const navItems = [
        {
          name: 'Home',
          slug: "/",
          active: true
        },
        {
          name: 'Login',
          slug: "/login",
          active: !authStatus
        },
        {
          name: 'Signup',
          slug: "/signup",
          active: !authStatus
        },
        {
          name: 'Add Posts',
          slug: "/add-post",
          active: authStatus
        }
      ]
    return (
        <header className='bg-gray-950 text-white  text-2xl'>
            <Container>
                <nav className='flex justify-between  py-3 '>

                    <div className='ml-2'>
                        ByteCodes Blog
                    </div>

                    <div className=''>
                        <ul className='flex ml-auto'>
                        {navItems.map((menu)=>(
                            menu.active ?
                            (<Link key={menu.name} to={menu.slug}>
                                <li className='mx-2 hover:text-yellow-500 duration-300'>
                                    {menu.name}
                                </li>
                            </Link>)
                            : null
                        ))}
                            {/* <Link to={"/"}>
                                <li className='mx-2 hover:text-yellow-500 duration-300'>
                                    Home
                                </li>
                            </Link>
                            <Link to={"/signup"}>
                                <li className='mx-2 hover:text-yellow-500 duration-300'>
                                    Sign Up
                                </li>
                            </Link>
                            <Link to={"/login"}>
                                <li className='mx-2 hover:text-yellow-500 duration-300'>
                                    Login
                                </li>
                            </Link> */}
                            {/* <Link to={"/add-post"}>
                                <li className='mx-2 hover:text-yellow-500 duration-300'>
                                    AddPost
                                </li>
                            </Link> */}
                            {authStatus && <LogoutBtn/>}
                        </ul>
                    </div>

                </nav>
            </Container>
        </header>
    )
}

export default Header