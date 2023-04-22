import { useState, useEffect } from 'preact/hooks'
import { v4 as uuid } from 'uuid';
import PreactLogo from './assets/preact.svg'

export function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    // localstorage only support storing strings as keys and values
    // - therefore we cannot store arrays and objects without converting the object
    // into a string first. JSON.stringify will convert the object into a JSON string
    localStorage.setItem("todos", JSON.stringify(todos));
    // add the todos as a dependancy because we want to update
    // localstorage anytime the todos state changes
  }, [todos]);

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
        <form className='row py-3 mx-1' onSubmit={handleSubmit}>
          <input className='text-center mb-2' value={input} type="text" onChange={(e) => {setInput(e.target.value)}} />
          <button className='btn btn-primary' type="submit">Add Task</button>
        </form>

        <div className="row">
          <div className="col">
            <ul className="list-unstyled">
              {todos.map((todo) => (
                <li key={todo.id} className='bg-warning p-2 my-2 rounded'>{todo.value}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
