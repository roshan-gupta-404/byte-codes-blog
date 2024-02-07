import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
// import Container from "./components/Container"
import "./App.css"
import { Outlet } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import authServices from './appwrite/auth'
import { login, logout, anonymousLogin } from './store/authSlice'
import { useEffect, useState } from "react"

function App() {
  // const userData = useSelector((state) => state.user)
  // console.log(userData);
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      try {
        const userData = await authServices.getCurrentUser()
        if (userData) {
          if (userData.email === '') dispatch(anonymousLogin({ userData }))
          else dispatch(login({ userData }))
        }
        else dispatch(logout())
      }
      catch (error) {
        const session = await authServices.loginAnonymous()
        if (session) {
          const userData = await authServices.getCurrentUser()
          if (userData) dispatch(anonymousLogin({ userData }))
          else dispatch(logout())
        }
        else dispatch(logout())
      }
      finally{
        setLoading(false)
      }
    })()
    // authServices.getCurrentUser().then((userData) => {
    //   if (userData) {
    //     dispatch(login({ userData }))
    //   }
    //   else {
    //     dispatch(logout())
    //   }
    // })
  }, [])

  return (!loading ? (<>
    <div id="body" className="min-h-screen bg-gray-950">

      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />

    </div>

  </>) : null

  )
}

export default App
