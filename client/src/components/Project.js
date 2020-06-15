import React, {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import Action from './Action'


const ProjectBox = styled.div`
  background: darkslategrey;
  color: white;
`

const H1 = styled.h1`
  color: white;
  font-size: 2rem;
  text-align: center;
  `


const AL = styled.ol`
  text-align: left;
`

export default function Project(props) {
  const {id} = useParams()
  const port = process.env.PORT || 4000;
  const url = process.env.URL || 'http://localhost'

  const [project, setProject] = useState({
    id: id,
    name: null,
    description: null,
    actions: []
  })

  useEffect(()=>{
    axios.get(`${url}:${port}/projects/${parseInt(id)}`)
      .then(res=>{
        setProject(res.data)
      })
      .catch(err=>{
        console.log(err)
      })
  },[id,port,url])

  return (
     <ProjectBox>
       <H1>{project.name}</H1>
       <Link to="/">Projects</Link>
       <p>{project.description}</p>
       <AL>
         {project.actions.map(a=>{
           return <Action a={a} key={a.id} />
          })}
      </AL>
     </ProjectBox>
  )
}
