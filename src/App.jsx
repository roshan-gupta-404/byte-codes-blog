import Container from "./components/Container"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Main from "./components/main/Main"

function App() {

  return (
    <>
      <div className="h-screen bg-zinc-950">
          
          <Header/>
          <Main/>
          <Footer/>
          
      </div>
      
    </>
  )
}

export default App
