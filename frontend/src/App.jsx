import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login } from './components/auth/Login'
import { SignUp } from './components/auth/SignUp'
import Home from './components/pages/Home'
import AddProduct from './components/Admin/AddProduct'
import { ProductListing } from './components/pages/ProductListing'
import ProtectedRoute from './components/ProtectedRoute'
import { AllProduct } from './components/Admin/AllProduct'
import { EditProduct } from './components/Admin/EditProduct'

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
    element: <ProtectedRoute allowedRoles={["user"]}>
      <ProductListing />
    </ProtectedRoute>
  },
  {
    path: "/Admin",
    children: [
      {
        path: "Products",
        element: <AllProduct/>
      },
      {
        path: "Add",
        element: <AddProduct />
      },
      {
        path: "edit/:id",
        element: <EditProduct/>
      }
    ]
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
