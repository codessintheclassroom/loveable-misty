import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, CardColumns } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import PetCard from './PetCard';

var mockedPets = [
  { id: "1", name: "Berty", description: "Has a good nose for truffles" },
  { id: "2", name: "Argo", description: "A superhero (of the dog world)" },
  { id: "3", name: "Fred", description: "Has opinions about sausages" },
];

const App: React.FC = () => {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return (
    <Container>
      <Row>
      <Col>
        <CardColumns>
        {
          mockedPets.map((pet) => <PetCard key={pet.id} pet={pet} />)
        }
        </CardColumns>
      </Col>
      </Row>
    </Container>
  );
}

export default App;
