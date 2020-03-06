
# Development notes

`create-react-app` includes a [webpack](https://github.com/webpack/webpack) development server. This server allows you to 'hot deploy' your edited code. This means that your code changes will be immediatly visible in the browser.

* Edit `src/App.js` to modify the example… and let the magic happen!

[![](../screenshots/hallo_welt.png)](../screenshots/hallo_welt.png)


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