import React from 'react'
import ReactDOM from 'react-dom'

import Example from './components/Example'

ReactDOM.render((
  <div className="root">
    Root Component
    <Example />
  </div>
), document.getElementById('root'))
