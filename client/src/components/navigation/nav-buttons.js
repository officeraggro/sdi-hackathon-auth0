import { useAuth0 } from '@auth0/auth0-react'
import React from "react";
import LoginButton from '../buttons/login-button'
import SignupButton from '../buttons/signup-button'
import LogoutButton from '../buttons/logout-button'

const NavButtons = () => {
  const { isAuthenticated } = useAuth0()

    return (
      <>
        <div className="nav-bar-buttons">
          {!isAuthenticated && (
            <>
              <SignupButton />
              <LoginButton />
            </>
          )}
          {isAuthenticated && (
            <>
              <LogoutButton />
            </>
          )}
        </div>
      </>
    );
}

export default NavButtons