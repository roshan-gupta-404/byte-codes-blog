import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
// import Container from "./components/Container"
import AddPost from "./pages/AddPost"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Post from "./pages/Post"
import Home from "./pages/Home"

function App() {

  return (
    <>
      <div className="min-h-screen bg-gray-950">
          
          <Header/>
          <Home/>
          {/* <Post/>
          <AddPost/>
          <Signup/>
          <Login/> */}
          <Footer/>
          
      </div>
      
    </>
  )
}

export default App
