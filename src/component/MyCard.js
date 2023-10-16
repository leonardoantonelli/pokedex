import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../sass/Mycard.scss";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import imgsfondo from "..";
import pokeball from "../assets/pokeball.png";
import { Link } from "react-router-dom";

function MyCard(props) {
  const { pokemon, image, id } = props;
  const { name } = pokemon;
  return (
    <div className="mycard container mb-3 position-relative shadow ">
      <Row className="">
        <Col className=" d-flex flex-column justify-content-end ">
          <Card.Title className="title text-light fw-bold display-6 position-relative mb-4">
            {pokemon.name}{" "}
          </Card.Title>
          <Card.Title className="idpoke"> #{pokemon.id} </Card.Title>{" "}
          <Card.Text>{pokemon.types} </Card.Text>
        </Col>
        <Col className="mycol position-relative">
          <img src={pokeball} alt="" className="myleftimg position-absolute" />
          <img src={image} alt="img" className="imgcard" />
          <img src={pokeball} alt="" className="myrightimg position-absolute" />
        </Col>{" "}
      </Row>
    </div>
  );
}

export default MyCard;
