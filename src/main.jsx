import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Post from './pages/Post.jsx'
import AddPost from './pages/AddPost.jsx'
import EditPost from './pages/EditPost.jsx'
// import AuthLayout from './components/AuthLayout.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />, 
        },
        {
            path: "/login",
            element: (
              // user doesn't require to be authenticate to access the login page. thats why authentication is pased false.
              //  <AuthLayout authentication={false}> 
              //       <Login />
              //   </AuthLayout>
                    <Login />
            ),
        },
        {
            path: "/signup",
            element: (
                // <AuthLayout authentication={false}>
                //     <Signup />
                // </AuthLayout>
                    <Signup />
            ),
        },
        {
            path: "/add-post",
            element: (
                // <AuthLayout authentication>
                //     {" "}
                //     <AddPost />
                // </AuthLayout>
                <AddPost />
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                // <AuthLayout authentication>
                //     {" "}
                //     <EditPost />
                // </AuthLayout>
                <EditPost />
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
    ],
},
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>    
  </React.StrictMode>,
)
