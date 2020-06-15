import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const ProjectBox = styled.div`
  background: darkslategrey;
  color: white;
`

const H2= styled.h2`
  color: white;
  text-decoration: none;
`
const H1 = styled.h1`
  color: white;
  font-size: 2rem;
  text-align: center;
  `

export default function ProjectList(props) {
  return (
    <ProjectBox>
      <H1>Projects</H1>
      {props.projects.map(project=>{
        return <Link to={`/projects/${project.id}`}><H2>{project.name}</H2></Link>
      })}
    </ProjectBox>
  )
}
