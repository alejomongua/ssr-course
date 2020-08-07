import React from 'react'
import { renderToString } from 'react-dom/server'
import Routes from '../client/Routes'
import { StaticRouter } from 'react-router-dom'

export default req => {
  const content = renderToString(
    <StaticRouter location={req.path}>
      <Routes />
    </StaticRouter>
  )
  
  return `
    <html>
      <head>
        <title>Template</title>
      </head>
      <body>
        <div id='root'>${content}</div>
        <script src='/client-bundle.js'></script>
      </body>
    </html>
  ` 
}