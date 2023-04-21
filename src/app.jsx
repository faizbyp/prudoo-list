import { useState } from 'preact/hooks'
import { v4 as uuid } from 'uuid';
import PreactLogo from './assets/preact.svg'

export function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (input !== '') {
      setTodos([...todos,
        {
          id: uuid(),
          value: input.trim()
        }
      ]);
    }
    setInput('');
  }

  return (
    <>
      <nav className='text-center py-3 bg-primary text-white'>
        <img src={PreactLogo} alt="" />
      </nav>
      <div className="container">
        <form className='row py-3' onSubmit={handleSubmit}>
          <input className='text-center mb-2' value={input} type="text" onChange={(e) => {setInput(e.target.value)}} />
          <button className='btn btn-primary text-white' type="submit">Add Task</button>
        </form>

        <div className="row">
          <div className="col">
            <ul className="todo-list">
              {todos.map((todo) => (
                <li key={todo.id}>{todo.value}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
