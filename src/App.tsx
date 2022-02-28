import React from 'react'
import { path } from '@tauri-apps/api';
import tauriCircles from './tauri.svg'
import tauriWord from './wordmark.svg'
import './App.css'

async function getAppDirPath(): Promise<string> {
  return path.appDir();
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="inline-logo">
          <img src={tauriCircles} className="App-logo rotate" alt="logo" />
          <img src={tauriWord} className="App-logo smaller" alt="logo" />
        </div>
        <h1>App Directory</h1>
        <p>{getAppDirPath()}</p>
      </header>
    </div>
  )
}

export default App
