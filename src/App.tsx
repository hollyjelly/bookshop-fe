import './App.css'
import Layout from "./layout/Layout.tsx";
import Home from "./pages/Home.tsx";
import ThemeSwitcher from "./components/header/ThemeSwitcher.tsx";
import Error from "./components/common/Error.tsx";
import {useState} from "react";
import {BookStoreThemeProvider, ThemeContext} from "./context/themeContext.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Signup from "./pages/Signup.tsx";
import ResetPassword from "./pages/ResetPassword.tsx";
import Login from "./pages/Login.tsx";
import Books from "./pages/Books.tsx";
import BookDetail from "./components/books/BookDetail.tsx";
import Cart from "./pages/Cart.tsx";
import Order from "./pages/Order.tsx";
import OrderList from "./pages/OrderList.tsx";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout><Home/></Layout>,
            errorElement: <Error/>
        },
        {
            path: "/books",
            element: <Layout><Books/></Layout>
        },
        {
            path: "/signup",
            element: <Layout><Signup/></Layout>
        },
        {
            path: "/reset",
            element: <Layout><ResetPassword/></Layout>
       },
        {
            path: "/login",
            element: <Layout><Login/></Layout>
        },
        {
            path: "/book/:bookId",
            element: <Layout><BookDetail/></Layout>
        },
        {
            path: "/carts",
            element: (
                <Layout>
                    <Cart/>
                </Layout>
            )
        },
        {
            path: "/order",
            element: (
                <Layout>
                    <Order/>
                </Layout>
            )
        },
        {
            path: "/orderlist",
            element: (
                <Layout>
                    <OrderList/>
                </Layout>
            )
        }
    ]
)

function App() {
    const [themeName, setThemeName] = useState(ThemeContext)

  return (
      <BookStoreThemeProvider>
          <ThemeSwitcher />
          <RouterProvider router={router}/>
      </BookStoreThemeProvider>
  )
}

export default App
