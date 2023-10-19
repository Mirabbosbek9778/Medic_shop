import { useState } from "react";
import {
 Nav, Wrapper, NavItem, NavIcon, NavItemBox,
  NavPart, NavPartSearch, NavButtonsLink
} from "./style";
import siteLogo from '/src/assets/images/logo.png'
import searchIcon from '/src/assets/icons/search.svg'
import navLocIcon from '/src/assets/icons/location.svg'
import navPhoneItem from '/src/assets/icons/phone.svg'
import navFacebookIcon from '/src/assets/icons/facebook.svg'
import navRussianIcon from '/src/assets/icons/russian.svg'
import navUzbIcon from '/src/assets/icons/uzb.svg'
import { BrowserRouter as Router } from "react-router-dom";
import { StyledNavLink as NavLink } from './style';



const Navbar = () => {
  const [language, setLanguage] = useState(null)
  return (
    <Router>
      <Nav>

        <Wrapper >
          <NavItem className="nav-item">
            <NavIcon className="nav-icon">
              <img src={navLocIcon} alt="No image" />
            </NavIcon>
            <p>г.Ташкент, Чиланзар <br />
              10 квартал, дом 3/1</p>
          </NavItem>
          <NavItem className="nav-item">
            <NavIcon className="nav-icon">
              <img src={navPhoneItem} alt="No image" />
            </NavIcon>
            <p>+998 71 276-62-53 <br />  +998 71 276-62-54</p>
          </NavItem>
          <a href="#">
            <img he src={siteLogo} alt="No image" />
          </a>
          <NavItemBox className="nav-item-box">
            <NavPartSearch>
              <img src={searchIcon} alt="No image" />

            </NavPartSearch>
            <NavPart className="nav-part">
              <img src={navFacebookIcon} alt="No image" />
              <p>Мы на Facebook</p>
            </NavPart>
            <NavPart className="nav-part">
              <img src={language === "Russian" ? navRussianIcon : navUzbIcon} alt="No image" />
              <select name="" id="">
                <option value="Russian" onChange={() => setLanguage("Russian")}>Russian</option>
                <option value="Uzbek" onChange={() => setLanguage("Uzbek")}>O'zbekcha</option>
              </select>
            </NavPart>
          </NavItemBox>

        </Wrapper>

        <NavButtonsLink>
          <NavLink style={{ borderRadius: "35px 0 0 35px" }} to="/">МАГАЗИН</NavLink>
          <NavLink to="">О КОМПАНИИ</NavLink>
          <NavLink to="">ПРОДУКЦИЯ</NavLink>
          <NavLink to="">УСЛУГИ</NavLink>
          <NavLink to="">АКЦИИ И НОВОСТИ</NavLink>
          <NavLink style={{ borderRadius: "0 35px 35px 0" }} to="">ОБРАТНАЯ СВЯЗЬ</NavLink>
        </NavButtonsLink>
      </Nav>
    </Router>
  );
};

export default Navbar;
