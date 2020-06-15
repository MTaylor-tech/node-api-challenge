import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios'
import ProjectList from './components/ProjectList'
import Project from './components/Project'
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

  const port = process.env.PORT || 4000;
  const url = process.env.URL || 'http://localhost'

  useEffect(()=>{
    axios.get(`${url}:${port}/projects`)
      .then(res=>{
        setProjects(res.data)
      })
      .catch(error=>{
        console.log(error)
      })
  },[port,url])

  return (
    <Router history={props.history}>
      <AppDiv className="App">
        <Switch>
          <Route exact path="/" render={(props)=><ProjectList projects={projects} />} />
          <Route exact path="/projects" render={(props)=><ProjectList projects={projects} />}/>
          <Route path="/projects/:id" component={Project} />
      </Switch>
      </AppDiv>
    </Router>
  );
}

export default App;
