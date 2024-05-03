import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ProfileCard = ({ profile, onSummary }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={profile.photo} alt={profile.name} />
      <Card.Body>
        <Card.Title>{profile.name}</Card.Title>
        <Card.Text>{profile.description}</Card.Text>
        <Button variant="primary" onClick={() => onSummary(profile)}>
          Show on Map
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProfileCard;
