import React from "react";
import "./DescriptionBox.css";

function Descriptionbox() {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum cum
          vero illo molestiae dignissimos eveniet laborum placeat perferendis
          quas blanditiis.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
          dolore cumque tempore nam inventore cum.
        </p>
      </div>
    </div>
  );
}

export default Descriptionbox;
