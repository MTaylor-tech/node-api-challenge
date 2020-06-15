import React, {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const AN = styled.span`
  font-size: 1.4rem;
`

const AX = styled.span`
  font-size: 1.4rem;
  text-decoration: line-through;
`

export default function Action({a}) {
  if (!a.completed) {
    return (
      <li>
        <AN>{a.description}</AN>
        <p>{a.notes}</p>
      </li>)
  } else {
    return (
      <li>
        <AX>{a.description}</AX>
      </li>
    )
  }
}
