import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import cards from "./cards.json";
import Stretch from "../components/Stretch/Stretch";
import "./Menu.css"


class Login extends Component {
  state = {
    isLoggedIn: false
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
    console.log("name = " + name);
    console.log("value = " + value);
  };

  handleFormSubmitSignUp = event => {
    event.preventDefault();
    this.createUser({
      firstName: this.state.fName,
      lastName: this.state.lName,
      email: this.state.email,
      password: this.state.password
    });
    console.log("state = " + JSON.stringify(this.state));
  };

  createUser = query => {
    console.log("query = " + JSON.stringify(query));
    API.createUser(query)
      .then(res => {
        console.log("LOGIN: res = " + JSON.stringify(res));
        if (res.data.success) {
          console.log("in success handle");
          window.location.assign('/kitchen');
          // this.setState({ loginStatus: true, });
          // this.props.handleLoginStatus(this.state.loginStatus, this.state.loginEmail);
          // this.setState({ isLoggedIn: true, });
          // this.setState({ loginMsg: res.data.message });
        } else {
          console.log("in failure handle");
          window.location.assign("/signup");
          // this.setState({ loginStatus: false });
          // this.props.handleLoginStatus(this.state.loginStatus, this.state.loginEmail);
          // this.setState({ isLoggedIn: false });
          // this.setState({ loginMsg: res.data.message });
        }
        // console.log("LOGIN: state = " + JSON.stringify(this.state));
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
        <Col size="md-4 sm-3 "></Col>
          <Col size="md-6 sm-6 ">
            {/* <form id="signup" name="signup"  action="/kitchen">
                <Row>Kitchen Sign In </Row>
                <Row>
                  <label for="email">Username</label>
                  <input class="text" name="email" type="email" />
                </Row>
                <Row>
                  <label for="password">Password</label>
                  <input name="password" type="password" />
                </Row>
                <Row>
                  <input class="btn" type="submit" value="Sign Up" />
                  <Link to="/kitchen" class="btn" value="Sign In" />
                  <input class="btn" href="/kitchen"  type="submit" value="Sign In" />
                </Row>
              </form> */}
            <div id="loginForm" className="loginForm">
              <form id="signup" name="signup" action="/kitchen">
                <Row>
                  {" "}
                  <h1 className="klog">Kitchen Sign Up</h1>{" "}
                </Row>

                <Row>
                  <label className="firstName login_password form1" for="login_fname">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="fname"
                    id="login_fname"
                    placeholder="Enter your first name"
                    onChange={this.handleInputChange}
                  />
                </Row>
                <Row>
                  <label className="lastName login_password form1" for="login_lname">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lname"
                    id="login_lname"
                    placeholder="Enter your last name"
                    onChange={this.handleInputChange}
                  />
                </Row>
                <Row>
                  <label className="email login_password form1" for="login_email">
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="login_email"
                    placeholder="Enter your email"
                    onChange={this.handleInputChange}
                  />
                </Row>
                <Row>
                  <label className="password login_password form1" for="login_Password">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="login_Password"
                    placeholder="Enter a password"
                    onChange={this.handleInputChange}
                  />
                </Row>
                <div id="loginSubmitButton" className="loginSubmitButton">
                  <button
                    className="submit_Button"
                    onClick={this.handleFormSubmitSignUp}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <Stretch />
          </Col>
          <Col size="md-2 sm-3 "></Col>

        </Row>
      </Container>
    );
  }
}

export default Login;
