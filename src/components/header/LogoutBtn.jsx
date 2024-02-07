import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'


function LogoutBtn() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout())
      location.replace("http://localhost:5173/"); // navigating the user to fresh website so that necessary functinon in app can also load.
    })
  }
  
  return (
    <div
      onClick={logoutHandler}
      className='inline-block mx-2 duration-200 hover:text-yellow-500 hover:cursor-pointer rounded-full'
    >Logout</div>
  )
}

export default LogoutBtn