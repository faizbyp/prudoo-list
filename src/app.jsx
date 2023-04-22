import { useState, useEffect } from 'preact/hooks'
import { v4 as uuid } from 'uuid';
import PreactLogo from './assets/preact.svg'

export function App() {
  const [input, setInput] = useState('');
  const [currentTodo, setCurrentTodo] = useState({});
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleEdit(todo) {
    setCurrentTodo({ ...todo });
  }

  function handleUpdateTodo(id, updatedTodo) {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    setTodos(updatedItem);
  }

  function handleEditFormSubmit(e) {
    e.preventDefault();
    handleUpdateTodo(currentTodo.id, currentTodo);
  }

  function handleDelete(id) {
    if (confirm('Are you sure to delete?')) {
      const removeItem = todos.filter((todo) => {
        return todo.id !== id;
      });
      setTodos(removeItem);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (input !== '') {
      setTodos([...todos,
        {
          id: uuid(),
          text: input.trim()
        }
      ]);
    }
    setInput('');
  }

  return (
    <>
      <nav className='text-center py-3 bg-primary'>
        <img src={PreactLogo} alt="Preact Todo List" />
      </nav>

      <div className="container">
        <form className='sticky-top row py-3 mx-1' onSubmit={handleSubmit}>
          <input className='form-control form-control-lg text-center my-2' placeholder='Insert Task' value={input} type="text" onChange={(e) => {setInput(e.target.value)}} />
          <button className='btn btn-lg btn-primary' type="submit">Add Task</button>
        </form>
        <div className="row">
          <div className="col">
            <ul className="list-unstyled">
              {todos.map((todo) => (
                <li key={todo.id} className='bg-warning p-2 my-2 rounded'>
                  {todo.text}
                  <button onClick={() => handleEdit(todo)} type="button" class="btn btn-light ms-2" data-bs-toggle="modal" data-bs-target="#editModal">
                    <i class="bi bi-pencil-fill"></i>
                  </button>
                  <button type='button' className='btn btn-danger ms-2' onClick={() => handleDelete(todo.id)}>
                    <i class="bi bi-trash3-fill"></i>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Task</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form onSubmit={handleEditFormSubmit}>
                <input className='form-control form-control-lg text-center my-2 w-100' placeholder='Edit Task' value={currentTodo.text} type="text" onChange={(e) => setCurrentTodo({...currentTodo, text: e.target.value})} />
                <button type="submit" class="btn btn-lg btn-primary w-100" data-bs-dismiss="modal">Save changes</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
