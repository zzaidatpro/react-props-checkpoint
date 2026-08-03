import React from "react";
import Player from "./player";
import joueurs from "./players";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PlayersList = () => {
    return (
        <Container className="my-5">
            <h1 className="text-center mb-4">Liste des Joueurs</h1>
            <Row className="g-4 justify-content-center">
                {/* 2. Parcours du tableau avec .map() */}
        {joueurs.map((joueur) => (
          <Col 
            key={joueur.id} 
            xs={12} 
            sm={6} 
            md={4} 
            lg={3} 
            className="d-flex justify-content-center"
          >
            <Player {...joueur} />  {/*operateur de propagation spred operator"*/}
          </Col>
        ))}
            </Row>
        </Container>
    );
};

export default PlayersList;

