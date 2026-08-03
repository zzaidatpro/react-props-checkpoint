import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayersList from './PlayersList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#f0f2f5', minHeight: '100vh', padding: '20px 0' }}>
      <PlayersList />
    </div>
  );
}

export default App;