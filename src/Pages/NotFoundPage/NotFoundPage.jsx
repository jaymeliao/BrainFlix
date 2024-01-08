// NotFound.js

import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./NotFoundPage.scss";
import FormButton from "../../components/Form/FormButton/FormButton";

function NotFound() {
  const navigate = useNavigate();
  const handleClick = () => {
    // navigate to home page
    navigate("/");
  };

  return (
    <section className="not-found-section">
      <h1>404 Not Found !!!!!!!</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <FormButton
        className="go-home-button"
        onClick={handleClick}
        text="Go back to home page"
      />
    </section>
  );
}

export default NotFound;
