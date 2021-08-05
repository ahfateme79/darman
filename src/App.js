import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './components/assets/fontyekan/Yekan.eot'
import './components/assets/fontyekan/Yekan.otf'
import './components/assets/fontyekan/Yekan.ttf'
import './components/assets/fontyekan/Yekan.woff'
import './components/assets/fontyekan/Yekan.woff2'
import './App.css'
import Index from './components'
import './components/assets/css/fontello-embedded.css'
import Contactus from './components/contact';
import Footre from './components/footer/footer';
import Memebrshipindex from './components/membership';
import Nav from './components/navigation/navigation';
import Questions from './components/questions';

function App() {


  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
          <Route path="/" exact component={Index}>
          </Route>
          <Route path="/membership" component={Memebrshipindex}>
          </Route>
          <Route path="/questions" component={Questions}>
          </Route>
          <Route path="/contact" component={Contactus}>
          </Route>
        </Switch>
        <Footre />
      </Router>
    </div>
  );
}

export default App;