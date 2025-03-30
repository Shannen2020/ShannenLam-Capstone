import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
      <div className="container">
        <h1 className = 'title'>Financial Dashboard</h1>
        <div className = 'input-group'>
          <input
          type = 'text'
          placeholder='AAPL'
          // value={symbol}
          onChange={1}
          />
          <input
          type="number"
          placeholder='Qty'
          // value={quantity}
          onChange={2}
          />
          <input
          type='number'
          placeholder="Price/stock"
          />

          <button>Add Stock</button>
        </div>

        <h2 className='subtitle'>Stock List</h2>
        <p>No stock added yet.</p>

        </div>
  )
}
  export default App;