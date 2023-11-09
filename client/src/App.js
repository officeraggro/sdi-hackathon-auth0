import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/landing-page'
import ProfilePage from './pages/profile-page'
import SettingsPage from './pages/settings-page'
import HomePage from './pages/home-page'
import AdminPage from './pages/admin-page'
import CallbackPage from './pages/callback-page'
import MissingPage from './pages/missing-page'
import PageLoader from './components/page-loader'
import AuthenticationGuard from './components/authentication-guard'


const App = () => {
  const { isLoading } = useAuth0()

  if (isLoading) {
    return (
      <div className='page-layout'>
        <PageLoader />
      </div>
    )
  }

  return (
    <>
    <Routes>
      {/* public */}
      <Route path='/' element={<LandingPage />} />
      <Route path='/callback' element={<CallbackPage />} />
      
      {/* private */}
      <Route path='/profile' element={<AuthenticationGuard component={ProfilePage} />} />
      <Route path='/settings' element={<AuthenticationGuard component={SettingsPage} />} />
      <Route path='/home' element={<AuthenticationGuard component={HomePage} />} />
      <Route path='/admin' element={<AuthenticationGuard component={AdminPage} />} />
      
      {/* catch-all */}
      <Route path='*' element={<MissingPage />} />
    </Routes>

    </>
  )
}

export default App
