import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router/dom'
import RootLayout from './Layout/RootLayout.jsx'
import { router } from './Route/Router.jsx'
import AuthProvider from './Context/AuthProvider.jsx'
import Loader from './Pages/Loader.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Suspense fallback={<Loader></Loader>}>
        <RouterProvider router={router}>
          <RootLayout ></RootLayout>
        </RouterProvider>
      </Suspense>
    </AuthProvider>
  </StrictMode >,
)
