import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import NavTab from "./nav-tab";

const NavTabs = () => {
  const { isAuthenticated, user } = useAuth0()

    return (
      <>
        <div className="nav-bar-tabs">
          {isAuthenticated && (
            <>
              <NavTab path='/profile' label="Profile" />
              <NavTab path='/settings' label="Settings" />
              <NavTab path='/home' label="Home" />
            </>
          )}
          {(isAuthenticated && user.nickname === 'fpendejo') && (
            <>
              <NavTab path='/admin' label="Admin" />
            </>
          )}
        </div>

      </>
    );
}

export default NavTabs