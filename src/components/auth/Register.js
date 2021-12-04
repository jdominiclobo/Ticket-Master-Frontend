import React from "react";
import { connect } from "react-redux";
import { startRegister } from "../../actions/userAction";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.confirmPassword !== this.state.password) {
      alert("Passwords do not match!!!");
    } else {
      const formData = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
      };
      // this.props.history.push('/users/login')
      const redirect = () => {
        return this.props.history.push("/users/login");
      };
      this.props.dispatch(startRegister(formData, redirect));
    }
  };

  render() {
    return (
      <div className="container">
        <div className="justify-content-md-center">
          <form className="form-signin" onSubmit={this.handleSubmit}>
            <h1 className="h1 mb-3 font-weight-normal text-center">Register</h1>
            <input
              className="form-control mb-3"
              type="text"
              name="username"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <input
              className="form-control mb-3"
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <input
              className="form-control mb-3"
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <input
              className="form-control mb-3"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={this.state.confirmPassword}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <input
              className="btn btn-lg btn-primary btn-block"
              type="submit"
              value="Register"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(Register);
