import React, {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import Action from './Action'


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

const AN = styled.span`
  font-size: 1.4rem;
`

const AX = styled.span`
  font-size: 1.4rem;
  text-decoration: line-through;
`

export default function Project(props) {
  const {id} = useParams()

  const [project, setProject] = useState({
    id: id,
    name: null,
    description: null,
    actions: []
  })

  useEffect(()=>{
    axios.get(`http://localhost:4000/projects/${parseInt(id)}`)
      .then(res=>{
        setProject(res.data)
      })
      .catch(err=>{
        console.log(err)
      })
  },[id])

  return (
     <ProjectBox>
       <H1>{project.name}</H1>
       <Link to="/">Projects</Link>
       <p>{project.description}</p>
       <ol>
         {project.actions.map(a=>{
           return <Action a={a} key={a.id} />
          })}
      </ol>
     </ProjectBox>
  )
}
