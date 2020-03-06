
# Entwicklungsserver

`create-react-app` enthält/inkludiert einen [webpack](https://github.com/webpack/webpack) Entwicklungsserver. 
Dieser Server ermöglicht Ihnen das 'Hot Deployment' Ihres bearbeiteten Codes. Das bedeutet,
dass Ihre Code-Änderungen sofort im Browser sichtbar sind.

* Bearbeiten Sie `src/App.js`, um das Beispiel zu modifizieren… and let the magic happen!

[![](../images/hallo_welt.png)](../images/hallo_welt.png)


```javascript
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hallo Welt!
        </a>
      </header>
    </div>
  );
}

export default App;
```