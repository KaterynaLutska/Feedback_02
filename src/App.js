import './App.css';

import { Component } from 'react';

import Container from './components/Container';
import Feedback from './components/Feedback';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Feedback />
        </Container>
      </div>
    );
  }
}

export default App;
