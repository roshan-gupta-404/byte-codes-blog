import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'


function LogoutBtn() {
  const dispatch = useDispatch()

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout())
      location.replace("https://byte-codes-blog.vercel.app/"); // navigating the user to fresh website so that necessary functinon in app can also load.
    })
  }
  
  return (
    <div
      onClick={logoutHandler}
      className='inline-block mx-2 duration-200 text-xl hover:text-yellow-500 hover:cursor-pointer rounded-full'
    >Logout</div>
  )
}

export default LogoutBtn