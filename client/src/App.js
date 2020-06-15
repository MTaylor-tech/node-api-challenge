import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios'
import ProjectList from './components/ProjectList'
import Project from './components/Project'
import Action from './components/Action'
import ActionList from './components/ActionList'
import styled from 'styled-components'
import './App.css'

const AppDiv = styled.div`
  background: darkslategrey;
  height: 100%;
  margin: 0;
  padding: 2vh 2vw;
`

function App(props) {
  const [projects, setProjects] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:4000/projects')
      .then(res=>{
        setProjects(res.data)
      })
      .catch(error=>{
        console.log(error)
      })
  },[])

  return (
    <Router history={props.history}>
      <AppDiv className="App">
        <Switch>
          <Route exact path="/" render={(props)=><ProjectList projects={projects} />} />
          <Route exact path="/projects" render={(props)=><ProjectList projects={projects} />}/>
          <Route path="/projects/:id" component={Project} />
          <Route path="/projects/:id/actions" component={ActionList} />
          <Route path="/actions/:id" component={Action} />
      </Switch>
      </AppDiv>
    </Router>
  );
}

export default App;
