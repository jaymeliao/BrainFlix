/* eslint-disable jsx-a11y/alt-text */
import "./Header.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import Avatar from "../Avatar/Avatar";
import mohan_muruge from "../../assets/images/Mohan-muruge.jpg";
import uploadIcon from "../../assets/icons/upload.svg";
import FormButton from "../FormButton/FormButton";
import FormInput from "../FormInput/FormInput";

function Header() {
  const handleSummit = () => {
    console.log("summit");
  };

  return (
    <div className="header">
      <img className="logo" src={logo} alt="Brain Flix Logo" />
      <div className="search_bar">
        <div className="parts">
          <FormInput
            className="search_input"
            type="text"
            placeholder="Search"
          />
          <Avatar
            className="profile_photo"
            imageUrl={mohan_muruge}
            altText="Avatar"
          />
        </div>
        <div className="parts">
          <FormButton
            icon={<img src={uploadIcon} />}
            text="Upload"
            onClick={handleSummit}
          />
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
