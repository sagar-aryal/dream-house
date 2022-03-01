import React, { useEffect } from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "../../globalStyles";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItems,
  NavLink,
  NavBtn,
  NavBtnLink,
} from "./NavbarStyles";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(true);
    } else {
      setButton(false);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <NavIcon />
          DESIGN
        </NavLogo>
        <MobileIcon onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavMenu click={click}>
          <NavItems>
            <NavLink to="/">Home</NavLink>
          </NavItems>
          <NavItems>
            <NavLink to="/">Services</NavLink>
          </NavItems>
          <NavItems>
            <NavLink to="/">Products</NavLink>
          </NavItems>
          <NavItems>
            <NavLink to="/">Contact</NavLink>
          </NavItems>
          <NavBtn>
            {button ? (
              <NavBtnLink to="/sign-up">
                <Button>Sign Up</Button>
              </NavBtnLink>
            ) : (
              <NavBtnLink to="/login">
                <Button>Login</Button>
              </NavBtnLink>
            )}
          </NavBtn>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
