import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Card from "../components/Card";
import Wrapper from "../components/Wrapper";
import cards from "./cards.json";

class Books extends Component {
  state = {
   cards,
   score: 0,
   highscore: 0
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="sm-12">
          <form id="signup" name="signup" method="post" action="/signup">
        <label for="email">Email Address</label>
        <input class="text" name="email" type="email" />
        <label for="firstname">Firstname</label>
        <input name="firstname" type="text" />
        <label for="lastname">Lastname</label>
        <input name="lastname" type="text" />
        <label for="password">Password</label>
        <input name="password" type="password" />
        <input class="btn" type="submit" value="Sign Up" />
    </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
