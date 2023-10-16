import React, { useEffect, useState } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Progess from "./Progess";
import Col from "react-bootstrap/Col";
import { POKEDEX_API_URL, POKE_IMAGE_URL } from "../config";
import MyCard from "./MyCard";
import Container from "react-bootstrap/esm/Container";
export default function Pokedex() {
  const [pokemonData, setPokemonData] = useState(null);
  useEffect(() => {
    axios.get(POKEDEX_API_URL + "?limit=150").then((response) => {
      if (response.status >= 200 && response.status < 300) {
        const { results } = response.data;
        let newPokemonData = [];
        results.forEach((pokemon, index) => {
          index++;
          let pokemonObject = {
            id: index,
            url: POKE_IMAGE_URL + index + ".png",
            name: pokemon.name,
          };

          newPokemonData.push(pokemonObject);
        });
        setPokemonData(newPokemonData);
      }
    });
  }, []);

  return (
    <Container>
      {pokemonData ? (
        <Row>
          {pokemonData.map((pokemon) => {
            return (
              <Col xs={12} lg={4} key={pokemon.name}>
                <MyCard
                  key={pokemon.name}
                  pokemon={pokemon}
                  image={pokemon.url}
                />
              </Col>
            );
          })}
        </Row>
      ) : (
        <Progess />
      )}
    </Container>
  );
}
