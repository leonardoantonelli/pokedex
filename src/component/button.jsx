import React from "react";
import Card from "../components/card";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton() {
    this.props.next();
  }

  render() {
    return (

        {this.props.pokemons.length >= 20 && (
          <div className="grid__wrapper-button">
            <button
              className="grid__button"
              type="button"
              onClick={this.handleButton}
            >
              Show more
            </button>
          </div>
        )}
    
    );
  }
}
