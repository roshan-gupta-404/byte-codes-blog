import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
// import Container from "./components/Container"
import AddPost from "./pages/AddPost"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Post from "./pages/Post"
import Home from "./pages/Home"
import { Outlet } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import authServices from './appwrite/auth'
import {login,logout} from './store/authSlice'
import { useEffect } from "react"

function App() {
  // const userData = useSelector((state) => state.user)
  // console.log(userData);
  const dispatch = useDispatch()
  
  useEffect(() => {
    authServices.getCurrentUser().then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
  }, [])

  return (
    <>
      <div className="min-h-screen bg-gray-950">

        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />

      </div>

    </>
  )
}

export default App
