import { render } from 'preact'
import { App } from './app.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'

render(<App />, document.getElementById('app'))
