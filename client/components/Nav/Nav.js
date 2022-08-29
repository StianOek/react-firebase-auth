import React, { useContext } from "react";
import AuthContext from "../../src/store/auth-context";
import { NavSC } from "./NavSC";
import { useNavigate } from "react-router-dom";
const Nav = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  return (
    <div>
      <nav>
        <NavSC.Wrapper>
          <NavSC.NavLinkWrapper>
            <span style={{ fontSize: 20 }}>Brewz</span>
            <NavSC.LinkWrapper>
              <NavSC.Li>
                <NavSC.NavLink to={"/"}>Home</NavSC.NavLink>
              </NavSC.Li>
              <NavSC.Li>
                <NavSC.NavLink to={"/list-brews"}>List of brewz</NavSC.NavLink>
              </NavSC.Li>
            </NavSC.LinkWrapper>
            {authContext.isLoggedIn && (
              <NavSC.Li>
                <NavSC.NavLink to={"/profile"}>Profile</NavSC.NavLink>
              </NavSC.Li>
            )}
          </NavSC.NavLinkWrapper>
          <div>
            {authContext.isLoggedIn && (
              <NavSC.Button
                onClick={() => {
                  authContext.logout();
                  navigate("/login", { replace: true });
                }}
              >
                Logout
              </NavSC.Button>
            )}
            {!authContext.isLoggedIn && (
              <NavSC.Li>
                <NavSC.NavLink to={"/login"}>Login</NavSC.NavLink>
              </NavSC.Li>
            )}
          </div>
        </NavSC.Wrapper>
      </nav>
    </div>
  );
};

export default Nav;
