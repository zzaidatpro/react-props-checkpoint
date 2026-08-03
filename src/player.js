import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

const styles = {
    card: {
        width: '18rem',
        margin: '15px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
        borderRadius: '12px',
        overflow: 'hidden',
        border: 'none',
        transition: 'transform 0.2s ease-in-out'
    },
    image: {
        height: '230px',
        objectFit: 'cover'
    },
    title: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: '#1a1a1a'
    },
    badge: {
        fontSize: '0.85rem',
        padding: '6px 10px'
    },
    subtitle: {
        fontSize: '0.9rem',
        color: '#6c757d'
    },
    label: {
        fontWeight: '600',
        color: '#333'
    },
    listGroupItem: {
        backgroundColor: '#f9f9f9',
        borderTop: '1px solid #eee'
    }
};

const Player = ({
    id = 1,
    nom = 'Nom_joueur',
    prenom = 'Prenom_joueur',
    datenaiss = '01/01/2000',
    clubs = ['club1', 'club2', 'club3'],
    age = 26,
    pays = 'Algerie',
    numero_de_maillot = 10,
    photo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfpiKVNKktIOno2k3URsXJuYDWTiwd21Vg-KA3kZU8HA&s=10'
    }) => {
    return (
        <Card style={{ width: '18rem', margin: '15px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <Card.Img
                variant="top"
                src={photo}
                alt={`${prenom} ${nom}`}
                style={{ height: '220px', objectFit: 'cover' }}
            />
            <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <Card.Title className="m-0">{prenom} {nom}</Card.Title>
                    <Badge bg="danger" pill style={{ fontSize: '0.9rem' }}>
                        #{numero_de_maillot}
                    </Badge>
                </div>
                <Card.Subtitle className="text-muted">
                    {pays} • {age} ans
                </Card.Subtitle>
            </Card.Body>

            <ListGroup className="list-group-flush">
                <ListGroup.Item>
                    <strong>Date de naissance :</strong> {datenaiss}
                </ListGroup.Item>
                <ListGroup.Item>
                    <strong>Clubs :</strong>
                    <ul className="mt-1 mb-0 ps-3">
                        {clubs.map((club, index) => (
                            <li key={index}>{club}</li>
                        ))}
                    </ul>
                </ListGroup.Item>
            </ListGroup>
        </Card>
    );
};

Player.defaultProps = {
    nom: "Nom non renseigné",
    prenom: "Prénom non renseigné",
    datenaiss: "Non renseignée",
    clubs: [],
    age: "N/A",
    pays: "Inconnu",
    numero_de_maillot: "N/A",
    photo: "https://via.placeholder.com/300x200?text=Joueur"
};

export default Player;