import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProfileList from './components/ProfileList';
import ProfileMap from './components/ProfileMap';
import AdminPanel from './components/AdminPanel';
import SearchFilter from './components/SearchFilter';


const App = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleSummary = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <Router>
      <Container>
        <Row>
          <Col>
            <h1>Profile Viewer</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <SearchFilter
              onSearch={(searchTerm) => {
                console.log(`Searching for ${searchTerm}`);
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Switch>
              <Route exact path="/" component={() => <ProfileList onSummary={handleSummary} />} />
              <Route
                path="/map"
                component={() => <ProfileMap profile={selectedProfile} />}
              />
              <Route path="/admin" component={AdminPanel} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  );
};

export default App;
