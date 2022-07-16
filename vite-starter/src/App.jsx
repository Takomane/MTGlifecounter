import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(20)
  
  return (
    <div className="App">
      <h1>Player One</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count - 5)}>
          - 5
        </button>
        </div>
      <div className="card">
        <button onClick={() => setCount((count) => count - 1)}>
          - 1
        </button>
        </div>
      <div className="lifetotal">
      ❤️ Life Total {count}
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          + 1
        </button>
        </div>
        <div className="card">
        <button onClick={() => setCount((count) => count + 5)}>
          + 5
        </button>
        </div>
    </div>
  )
}

export default App
