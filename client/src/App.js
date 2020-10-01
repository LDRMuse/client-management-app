import React from 'react';
import './App.css';
import { Dashboard } from './components'
import { ClientState } from './context/clientContext/ClientState'

function App() {
  return (
    <ClientState>
      <div className="App">
        <h1 className='title is-3'>app</h1>
        <Dashboard />
      </div>
    </ClientState>

  );
}

export default App;
