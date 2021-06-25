import React from "react";
import styled from "styled-components";

import keepLogo from '../assets/keep.jpg';
import reactLogo from '../assets/logo.svg';
import firebaseLogo from '../assets/firebase.png';

const Header = () => {
    return (
        <Nav>
        <p>Keep clone</p>
        <ImgWrap>
          <Img src={keepLogo} alt="Google keep logo" />
          <p>+</p>
          <Img src={reactLogo} alt="React logo"/>
          <p>+</p>
          <Img src={firebaseLogo} alt="firebase logo"/>
        </ImgWrap>
      </Nav>
    );
   };
  

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding: 4px 25px;
  border-bottom: 1px solid rgba(60, 64, 67, 0.2);
`;
   
const ImgWrap = styled.div`
    display: flex;
    align-items:center;
`;

const Img = styled.img`
width:40px;
height:40px;
`;

  export default Header;