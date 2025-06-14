import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login } from './components/auth/Login'
import { SignUp } from './components/auth/SignUp'
import Home from './components/pages/Home'
import AddProduct from './components/AddProduct'
import { ProductListing } from './components/pages/ProductListing'


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <SignUp />
  },
  {
    path: '/products',
    element: <ProductListing/>
  },
  {
    path: '/admin/Add',
    element: <AddProduct/>
  }

])
function App() {

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App
