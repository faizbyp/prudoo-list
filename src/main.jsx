import { render } from 'preact'
import { App } from './app.jsx'
import './styles/main.scss'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'

render(<App />, document.getElementById('app'))
