import { useAuth0 } from '@auth0/auth0-react'
import React from "react";

const SignupButton = () => {
  const { loginWithRedirect } = useAuth0()

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: '/home',
      },
      authorizationParams: {
        screen_hint: 'signup'
      }
    })
  }

  return (
    <>
        <div>
            <button className='signup-button' onClick={handleSignUp}>
                Sign Up
            </button>
        </div>
    </>
  );
};

export default SignupButton;
