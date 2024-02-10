import React from 'react'
import Container from '../Container'
import { NavLink } from 'react-router-dom'
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
          active: !authStatus
        }
      ]
    return (
        <header className='bg-gray-950 text-white  text-2xl'>
            <Container>
                <nav className='sm:flex justify-between py-3 sm:border-b border-slate-500 '>

                    <div className='flex justify-center text-2xl sm:ml-2 mb-2 sm:mb-0 '>
                        ByteCodes Blog
                    </div>

                    <div className='flex justify-center border-y pb-1 sm:pb-0 border-slate-500 sm:border-y-0'>
                        <ul className='flex sm:ml-auto'>
                        {navItems.map((menu)=>(
                            menu.active ?
                            (<NavLink key={menu.name} to={menu.slug} className={({isActive})=>`${isActive?'text-yellow-500':''}`}>
                                <li className='mx-3 text-xl hover:text-yellow-500 duration-300'>
                                    {menu.name}
                                </li>
                            </NavLink>)
                            : null
                        ))}
                            {authStatus && <LogoutBtn/>}
                        </ul>
                    </div>

                </nav>
            </Container>
        </header>
    )
}

export default Header