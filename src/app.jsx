import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Container from 'react-bootstrap/Container';

// Routes
import Home from './routes/home';
import Projects from './routes/projects';

// Components
import Header from './components/header'
import Footer from './components/footer';

const App = () => {
  return (
    <div>
      <Router>
        <Header />

        <Container>
          <Switch>
            {/* Project page */}
            <Route path="/projects">
              <Projects />
            </Route>
            {/* Home page */}
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
