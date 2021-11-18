import "./Contact.css";
import React, { Component } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Input from "../../Component/InputField/Input";
import Textarea from "../../Component/InputField/Textarea";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      queries: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      ...this.state.contact,
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    alert("A name was submitted: " + this.state.name);
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h2 className="mt-4 mb-4">Contact</h2>
          <form className="form" onSubmit={this.handleSubmit}>
            <div class="mb-3">
              <Input
                title={"Name"}
                type={"text"}
                name={"name"}
                formControl={"form-control"}
                placeholder={"name"}
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <div class="mb-3">
              <Input
                title={"Email"}
                type={"email"}
                name={"email"}
                formControl={"form-control"}
                placeholder={"example@gmail.com"}
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div class="mb-3">
              <Input
                title={"Subject"}
                type={"text"}
                name={"subject"}
                formControl={"form-control"}
                placeholder={"Subject"}
                value={this.state.subject}
                onChange={this.handleChange}
              />
            </div>
            <div class="mb-3">
              <Textarea
                title={"Details"}
                name={"queries"}
                formControl={"form-control"}
                placeholder={"Your Queries"}
                rows={"3"}
                value={this.state.queries}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" class="btn btn-primary ml">
              Primary
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
