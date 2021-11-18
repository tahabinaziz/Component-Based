import React, { Component } from "react";
class ImageBox extends Component {
  render() {
    const { name, img, email } = this.props;
    return (
      <>
        <div className="container">
          <div
            className=""
            style={{ height: "200px", width: "200px", display: "inline-block" }}
          >
            <img src={img} alt="" class="img-thumbnail" />
            <strong>
              <p>{name}</p>
            </strong>
            <p style={{ fontSize: "15px" }}>{email}</p>
            <br />
          </div>
        </div>
      </>
    );
  }
}
export default ImageBox;
