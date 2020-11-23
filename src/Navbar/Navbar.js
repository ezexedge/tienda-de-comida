import React from "react";
import styled from "styled-components";
import { pizzaRed } from "../Styles/colors";
import { Title } from "../Styles/title";

const NavbarStyled = styled.div`
  background-color: ${pizzaRed};
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 999;
  display: flex;
  justify-content: space-between;
`;

const LoginButton = styled.span`

  cursor: pointer;

`
const Logout = styled.span`
color: white;
padding: 10px;
background-color: black;
border-radius: 10px;
margin-left: 10px;
`

const Logo = styled(Title)`
  font-size: 20px;
  color: white;
  text-shadow: 1px 1px 4px #380502;
`;

const UserStatus = styled.div`

  color: white;
  font-size: 12px;
  margin-right: 30px;

`

export function Navbar({login, loggedIn,logout}) {
  return (
    <NavbarStyled>
      <Logo>
        Cocina de laura{" "}
        <span role="img" aria-label="pizza slice">
          🍴
        </span>
      </Logo>
      <UserStatus>
      {loggedIn !== "loading" ? (
          <>
            👤 {loggedIn ? `Hola ${loggedIn.displayName} ` : ""}
            {loggedIn ? (
              <Logout
              
              onClick={logout}> Cerrar sesion </Logout>
            ) : (
              <LoginButton onClick={login}> Iniciar sesion </LoginButton>
            )}
          </>
        ) : (
          "loading..."
        )}

      </UserStatus>
    </NavbarStyled>
  );
}
