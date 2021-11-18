import React, { Component } from "react";
class ImageBox extends Component {
  render() {
    const { name, formControl, email, placeholder,title,value,onChange } = this.props;
    return (
      <>
        <div className="container">
          <label for="exampleFormControlInput1" className="form-label">
            {title}
          </label>
          <input
            name={name}
            type={email}
            className={formControl}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </div>
      </>
    );
  }
}
export default ImageBox;
