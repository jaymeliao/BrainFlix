/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./UploadPage.scss";
import imageUrl from "../../assets/images/Upload-video-preview.jpg";
import FormInput from "../../components/Form/FormInput/FormInput";
import FormButton from "../../components/Form/FormButton/FormButton";
import publishIcon from "../../assets/icons/publish.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";





function UploadPage(props) {

  const navigate = useNavigate();
  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("hello");


  // };
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    console.log(event.target.title);
    console.log(event.target.description);
 

    const newVideo = {
      title: event.target.elements.title.value,
   

      description:event.target.description.value,
    };

    try {
      const response = await axios.post(
        "http://localhost:5050/videos",
        newVideo
      );
      console.log(response);

  
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    navigate("/");
  };








  return (
    <form className="upload-video-section" onSubmit={handleFormSubmit}> 
      <h1 className="section-title">Upload Video</h1>
      <div className="upload-form" >
        <div className="form-item">
          <label>Video Thumbnail</label>
          <div className="thumbnail">
            <img className="thumbnail__image" src={imageUrl} />
          </div>
        </div>
        <div className="video-info-input">
          <div className="form-item">
            <label>Title Your Video</label>
            <FormInput
               name="title"
              istextarea="false"
              className="form-input"
              type="text"
              placeholder="Add a title to your video"
            />
          </div>
          <div className="form-item">
            <label>Add a Video Description</label>
            <FormInput
              name="description"
              istextarea="true"
              className="form-input form-input--description"
              type="text"
              placeholder="Add a description to your video"
            />
          </div>
        </div>
      </div>
      <div className="upload-buttons">
        <FormButton className="cancel-button" text="Cancel" backgroundColor="white" textColor="#0095FF"   onClick={() => navigate("/")}  />
        <FormButton type="submit" className="publish-button"  text="Publish" icon={<img src={publishIcon} />} />
      </div>
    </form>
  );
}

export default UploadPage;
