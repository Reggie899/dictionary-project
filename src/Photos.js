import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    console.log("photosssss", props.photos);

    return (
      <div className="photoContainer">
        <div className="sectionPhotos">
          <div className="row">
            {props.photos.map(function (photo, index) {
              return (
                <div className="pictures col-5" key={index}>
                  <a href={photo.src.original} target="_blank" rel="noreferrer">
                    <img className="img-fluid" src={photo.src.landscape} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
