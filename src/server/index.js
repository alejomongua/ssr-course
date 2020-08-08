import '@babel/polyfill'
import express from 'express'
import proxy from 'express-http-proxy'
import renderer from '../helpers/renderer'
import createStore from '../helpers/createStore'
import { matchRoutes } from 'react-router-config'
import routes from '../client/routes'

const app = express()

app.use(express.static('public'))

app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
  proxyReqOptDecorator(options) {
    options.headers['x-forwarded-host'] = 'localhost:3000'
    return options
  }
}))

app.get('*', async (req, res) => {
  const store = createStore(req)

  const promises = matchRoutes(routes, req.path).map(
    ({route}) => (
      route.loadData ? route.loadData(store) : null
    )
  )

  Promise.all(promises).then(() => res.send(renderer(req, store)))
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
