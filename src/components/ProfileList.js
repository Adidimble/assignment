import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileCard from './ProfileCard';
import { Row, Col } from 'react-bootstrap';

const ProfileList = ({ onSummary }) => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    // Fetch profiles from a REST API endpoint
    axios.get('/api/profiles')
      .then(response => {
        setProfiles(response.data);
      })
      .catch(error => {
        console.error('Error fetching profiles:', error);
      });
  }, []);

  return (
    <Row>
      {profiles.map((profile) => (
        <Col key={profile.id} sm={6} md={4} lg={3}>
          <ProfileCard profile={profile} onSummary={onSummary} />
        </Col>
      ))}
    </Row>
  );
};

export default ProfileList;
