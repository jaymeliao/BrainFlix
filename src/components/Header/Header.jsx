/* eslint-disable jsx-a11y/alt-text */
import "./Header.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import Avatar from "../Avatar/Avatar";
import mohan_muruge from "../../assets/images/Mohan-muruge.jpg";
import uploadIcon from "../../assets/icons/upload.svg";
import FormButton from "../Form/FormButton/FormButton";
import FormInput from "../Form/FormInput/FormInput";
import icon from "../../assets/icons/search.svg";
import { NavLink } from "react-router-dom";
import NoStyleNavLink from "../NoStyleNavLink/NoSyleNavLink";

function Header() {
  const handleSummit = () => {
    console.log("summit");
  };

  return (
    <div className="header">
      <NavLink to="/" className="navlink-logo">
        <img className="logo" src={logo} alt="Brain Flix Logo" />
      </NavLink>

      <div className="search_bar">
        <div className="parts parts--left">
          <FormInput
            iconImage={icon}
            className="search_input form-input"
            type="text"
            placeholder="Search"
            istextarea="false"
          />
          <Avatar
            className="profile_photo"
            imageUrl={mohan_muruge}
            altText="Avatar"
          />
        </div>
        <div className="parts">
          <NoStyleNavLink to="/upload" className="navlink-button">
            <FormButton
              className="search-button"
              icon={<img src={uploadIcon} />}
              text="Upload"
              onClick={handleSummit}
            />
          </NoStyleNavLink>
          <Avatar
            className="profile_photo"
            imageUrl={mohan_muruge}
            altText="Avatar"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
