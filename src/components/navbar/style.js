import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = styled.div`


`

const Wrapper = styled.div`
max-width: 1440px;
display: flex;
padding: 35px 0;
align-items: center;
justify-content: space-between; 
margin: auto;

`

const NavItem = styled.div`
width: 233px;
display: flex;
align-items: center;
gap: 15px;
font-size: 16px;
font-weight: 400;
color: #5A5A5A;
`

const NavItemBox = styled.div`
display: flex;
gap: 60px;
`

const NavIcon = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    background: #FFFFFF;
    margin: auto;
`

const NavPart = styled.div`
width: 200px;
display: flex;
padding: 8px 0;
border-radius: 25px;
justify-content: space-evenly;
background: #FFFFFF;
font-size: 14px;
color: #0D4C93;
font-weight: 500;
align-items: center;
`

const NavPartSearch = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 10px;
border-radius: 25px;
`

const NavButtonsLink = styled.div`
margin: auto;
width: 1440px;
display: flex;
justify-content: space-between;
`

const StyledNavLink = styled(NavLink)`
height: 70px;
padding: 0 53px;
  font-size: 20px;
  font-weight: 500;
  color: #0D4C93;
  display: flex;
  background: #FFFFFF;
  align-items: center;
  margin: 20px 0 0px;
  /* margin-bottom: 10px; */
  box-shadow: 0 0 1px;

  `;

export { Nav }
export { Wrapper }
export { NavItem }
export { NavItemBox }
export { NavIcon }
export { NavPart }
export { NavPartSearch }
export { NavButtonsLink }
export { StyledNavLink };

//ekran 1440px
//
