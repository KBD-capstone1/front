// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MVP from './pages/mvp.jsx'
import SignUpPage from './pages/sign/signUp.jsx'
import SignInPage from './pages/sign/signUp.jsx'
// import LandingPage from './pages/landingPage.jsx'        //
// import OnboardingPage from './pages/OnboardingPage.jsx'  //
import RootLayout from './layouts/rootLayout.jsx'
import RootPage from './pages/portal/portal.jsx'
// import Dashboard from './pages/dashboard/dashboard.jsx'
// import UserLayout from './layouts/userLayout.jsx'

// import WikiLayout from './layouts/wikiLayout.jsx'
// import PortalLayout from './layouts/portalLayout.jsx'
// import BlogLayout from './layouts/blogLayout.jsx'

// import AdminLayout from './layouts/adminLayout.jsx'

const router = createBrowserRouter([
  { path: '/', element: <MVP /> },
  // { path: '/mvp', element: <MVP /> },

  { path: '/signUp', element: <SignUpPage /> },
  { path: '/signIn', element: <SignInPage /> },
  // { path: '/landing', element: <LandingPage /> },
  // { path: '/onboarding', element: <OnboardingPage /> },
  {
    path: '/prototype', //
    element: <RootLayout />,
    children: [
      { index: true, element: <RootPage /> },        // 다른 사용자 위키 탐색
      { path: '/dashboard',// 사용자 페이지 관리
        element: <Dashboard />
        // children: [
        //   { index: true, element: <RootPage /> },
        //   { path: '/', element: <UserLayout /> },    
        // ]
      },
      { path: '/user',  // 사용자 정보 관리
        element: <UserLayout />,
        // children: [
        //   { index: true, element: <RootPage /> },
        //   { path: '/', element: <UserLayout /> },    
        // ]
      },
      { path: '/wiki',  // 위키
        element: <WikiLayout />
        // children: [
        //   { index: true, element: <RootPage /> },
        //   { path: '/', element: <UserLayout /> },    
        // ]
      },
      { path: '/portal',  // 포탈
        element: <PortalLayout />
        // children: [
        //   { index: true, element: <RootPage /> },
        //   { path: '/', element: <UserLayout /> },    
        // ]
      },
      { path: '/blog',  // 블로그
        element: <BlogLayout />
        // children: [
        //   { index: true, element: <RootPage /> },
        //   { path: '/', element: <UserLayout /> },    
        // ]
      },
    ]
  },
  // { path: '/admin', element: <AdminLayout /> },

]);

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

      <RouterProvider router={router} />

      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
    </>
  )
}

export default App
