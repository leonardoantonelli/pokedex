import React, { useEffect, useState } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Progess from "./Progess";
import Col from "react-bootstrap/Col";
import { POKEDEX_API_URL, POKE_IMAGE_URL } from "../config";
import MyCard from "./MyCard";
import Container from "react-bootstrap/esm/Container";

export default function Pokedex() {
 constructor(props) {
    super(props);
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton() {
    this.props.next();
  }

  render() {
    return (
      <Row >
        <div className="grid__pokemon">
          {this.props.pokemons.map((poke) => (
            <MyCard key={poke.name} pokemon={poke}  ></MyCard>
          ))}
        </div>
        {this.props.pokemons.length >= 20 && (
          <div className="">
            <button
              className=""
              type="button"
              onClick={this.handleButton}
            >
              Show more
            </button>
          </div>
        )}
      </Row>
    );
  }

}
