import React, { Component } from "react";
import { Link } from "react-router-dom";

class Card extends Component {
  render() {
    const { img, title, smallText, siteLink } = this.props;
    return (
      <>
        <div class="col-md-4 mb-4">
          <div className="card">
            <div className="view overlay">
              <img
                className="card-img-top"
                //   src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                src={img}
                alt="Card image cap"
                style={{ height: "200px", width: "100%" }}
              />
              <a href="#!">
                <div className="mask rgba-white-slight"></div>
              </a>
            </div>

            {/* <!-- Card content --> */}
            <div className="card-body">
              {/* <!-- Title --> */}
              <h4 className="card-title">{title}</h4>
              {/* <!-- Text --> */}
              <p className="card-text">{smallText}</p>
              {/* <!-- Button --> */}
              <Link to={siteLink} target="_blank" className="btn btn-primary">
                View
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Card;
