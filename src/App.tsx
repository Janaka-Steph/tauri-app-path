import React, {useEffect, useState} from 'react'
import { path } from '@tauri-apps/api';
import tauriCircles from './tauri.svg'
import tauriWord from './wordmark.svg'
import './App.css'

function App() {
  const [appDir, setAppDir] = useState<string | null>(null);

  useEffect(() => {
    if ('__TAURI__' in window) {
      path.appDir().then(dir => {
        console.log('dir', dir);
        setAppDir(dir)
      });
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div className="inline-logo">
          <img src={tauriCircles} className="App-logo rotate" alt="logo" />
          <img src={tauriWord} className="App-logo smaller" alt="logo" />
        </div>
        <h1>App Directory</h1>
        <p>{appDir !== null ? appDir : 'loading...'}</p>
      </header>
    </div>
  )
}

export default App
