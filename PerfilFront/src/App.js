import React from 'react'
import { HashRouter as Router, Switch, Redirect, Route } from 'react-router-dom'
import ProfessionalProfile from './components/ProfessionalProfile';

const App = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/" render={() => (<Redirect to="/perfil" />)}/>
          <Route exact path={"/perfil"} render={() => <ProfessionalProfile /> } />
        </Switch>
    </Router>
  )
}

export default App