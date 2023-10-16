import axios from "axios";
import React, { Component } from "react";
import { POKEDEX_API_URL } from "../config";

export default class CardDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: null,
    };
  }
  componentDidMount() {
    const { match } = this.props;
    const { id } = match?.params;
    axios.get(POKEDEX_API_URL + "/" + id).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        console.log(response.data);
        this.setState({ pokemon: response.data });
      }
    });
  }
  render() {
    return (
      <div>
        <h2> cioa</h2>
      </div>
    );
  }
}
