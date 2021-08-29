import React from 'react';
import {BrowserRouter as Router, Link , Switch, Route} from 'react-router-dom';
import {ToDoContextProvider} from './context/todoContext'
import Todo  from './pages/Todo';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage'
import Navbar from './ui/Navbar';
import Dnd from './pages/Dnd';



function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <ToDoContextProvider>
        
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/todo" component={Todo} /> 
            <Route exact path="/home" component={Home} />
            <Route exact path="/dnd" component={Dnd} />
          </Switch>
        
      </ToDoContextProvider>
      </Router>

    </div>
  );
}

export default App;
