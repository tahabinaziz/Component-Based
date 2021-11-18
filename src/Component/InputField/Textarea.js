import React, { Component } from "react";
class ImageBox extends Component {
  render() {
    const { name, formControl, rows, placeholder,title,value,onChange } = this.props;
    return (
      <>
        <div className="container">
          <label for="exampleFormControlInput1" className="form-label">
            {title}
          </label>
          <textarea
              name={name}
              className={formControl}
              rows={rows}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
            ></textarea>
        </div>
      </>
    );
  }
}
export default ImageBox;
