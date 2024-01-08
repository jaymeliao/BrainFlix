/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./UploadPage.scss";
import imageUrl from "../../assets/images/Upload-video-preview.jpg";
import FormInput from "../../components/Form/FormInput/FormInput";
import FormButton from "../../components/Form/FormButton/FormButton";
import publishIcon from "../../assets/icons/publish.svg";

function UploadPage(props) {
  return (
    <section className="upload-video-section">
      <h1 className="section-title">Upload Video</h1>
      <div className="upload-form">
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
              istextarea="false"
              className="form-input"
              type="text"
              placeholder="Add a title to your video"
            />
          </div>
          <div className="form-item">
            <label>Add a Video Description</label>
            <FormInput
              istextarea="true"
              className="form-input form-input--description"
              type="text"
              placeholder="Add a description to your video"
            />
          </div>
        </div>
      </div>
      <div className="upload-buttons">
        <FormButton className="cancel-button" text="Cancel" backgroundColor="white" textColor="#0095FF"   />
        <FormButton className="publish-button"  text="Publish" icon={<img src={publishIcon} />} />
      </div>
    </section>
  );
}

export default UploadPage;
