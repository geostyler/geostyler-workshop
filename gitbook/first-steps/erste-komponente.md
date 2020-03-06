# Include a react-geo component

Now that we have `react-geo` installed, we can use it's components in the
*{{ book.reactAppName }}* application. For demonstration purposes we'll now
add a [simple button](https://terrestris.github.io/react-geo/docs/latest/index.html#!/SimpleButton)
to the application.

Please open a text editor (if not already done) and open the file `App.js` from
the `src` directory of your *{{ book.reactAppName }}* application. Now import the
`SimpleButton` class with the following statement:

```javascript
import {
  SimpleButton
} from '@terrestris/react-geo';
```

The style definitions of `react-geo` and `antd` need to be imported as well:

```javascript
import 'antd/dist/antd.css';
import './react-geo.css';
```

If the `react-geo.css` file is not yet located in the `src` directory please
paste it from [here](https://github.com/terrestris/react-geo-ws/blob/master/gitbook/materials/react-geo.css).

> **info**
> Please note that we are importing css files with the ES6 `import` here. This needs
> a properly configured [css-loader](https://www.npmjs.com/package/css-loader).
> `create-react-app` includes this.

Now make use of the imported class by integrating it to the `render` method inside the `App` div (e.g. within the `<p>`-element):

```
<SimpleButton>
  Hello world!
</SimpleButton>
```

Save the file, open the application in your browser.
You should see the changes directly, otherwise reopen [http://localhost:3000](http://localhost:3000).
A blue button labelled with the text *Hello world* will be rendered.

[![](../screenshots/hallo_welt_button.png)](../screenshots/hallo_welt_button.png)

Congratulations! You just created a complete React application including your first
`react-geo` component with a few commands! We will now enhance the button to alert
once it has been clicked by implementing a `onClick` callback function:

```javascript
<SimpleButton
  onClick={() => {alert('Hello World!');}}
>
```

Save the changes and test the results by clicking on the button. You should now
see a simple alert message with a *Hello World!* message.

We can also replace the text of the button with an icon. Simply remove the *Hello world* text and add the `icon` property with the value `"bars"` to the component.

```javascript
<SimpleButton
  onClick={() => {alert('Hello World!');}}
  icon="bars"
/>
```

Voilá! You added a nice menu button to your app!

Your final solution should look like the following snippet:

```javascript
import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import './react-geo.css';

import {
  SimpleButton
} from '@terrestris/react-geo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <SimpleButton
          onClick={() => {alert('Hello World!');}}
          icon="bars"
        />
      </header>
    </div>
  );
}

export default App;
```