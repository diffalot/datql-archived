import React from 'react'
import ReactDOM from 'react-dom'

const HelloMessage = props => {
  return <div>Hello {props.name}</div>
}

const mountNode = document.getElementById('app')

export default ReactDOM.render(<HelloMessage name="Jane" />, mountNode)
