import React from 'react';
import styled from 'styled-components'

const AN = styled.h3`
  font-size: 1.4rem;
`

const AX = styled.h3`
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
