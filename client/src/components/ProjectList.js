import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const ProjectBox = styled.div`
  background: darkslategrey;
  color: white;
  height: 100%;
`

const H2= styled.span`
  color: white;
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: bold;
`
const H1 = styled.h1`
  color: white;
  font-size: 2rem;
  text-align: center;
  `
  const PL = styled.ul`
    text-align: left;
  `

export default function ProjectList(props) {
  return (
    <ProjectBox>
      <H1>Projects</H1>
      <PL>
        {props.projects.map(project=>{
          return <li key={project.id}><Link to={`/projects/${project.id}`}><H2>{project.name}</H2></Link></li>
        })}
      </PL>
    </ProjectBox>
  )
}
