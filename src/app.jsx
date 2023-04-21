import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className='text-center py-5 bg-primary-subtle'>Todo List</nav>
      <div className="container">
        <div className="row">
          <div className="col">
            Hello
          </div>
        </div>
      </div>
    </>
  )
}
