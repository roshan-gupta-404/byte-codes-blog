import Container from "./components/Container"
import Post from "./components/Post"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Main from "./components/main/Main"

function App() {

  return (
    <>
      <div className="bg-gray-950">
          
          <Header/>
          {/* <Main/> */}
          <Post/>
          <Footer/>
          
      </div>
      
    </>
  )
}

export default App
