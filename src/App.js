import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ParameterState from './context/parameterContext/ParameterState';
import AlphabetOptions from './components/alphabetOptions/AlphabetOptions';
import Navbar from './components/UI/Navbar/Navbar';

const App = () => {
    return (
        <Router>
            <ParameterState>
                <Navbar/>
                <Switch>                   
                    <Route path="/results">
                        <h1>asd</h1>
                    </Route>
                    <Route path="/">
                        <AlphabetOptions/>
                    </Route>
                </Switch>
            </ParameterState>
        </Router>
    )
}

export default App