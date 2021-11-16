import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <>
        <div class="col-md-4 mb-4">
          <div className="card">
            <div className="view overlay">
              <img
                className="card-img-top"
                //   src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                src={this.props.img}
                alt="Card image cap"
                style={{height:'200px', width:'100%'}}
              />
              <a href="#!">
                <div className="mask rgba-white-slight"></div>
              </a>
            </div>

            {/* <!-- Card content --> */}
            <div className="card-body">
              {/* <!-- Title --> */}
              <h4 className="card-title">{this.props.title}</h4>
              {/* <!-- Text --> */}
              <p className="card-text">{this.props.smallText}</p>
              {/* <!-- Button --> */}
              <a
                href={this.props.siteLink}
                target="_blank"
                className="btn btn-primary"
              >
                View
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Card;
