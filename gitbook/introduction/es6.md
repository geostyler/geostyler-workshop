#ES6

<img src="../images/es6-logo.jpg" alt="" style="width: 150px;"/>

ES (ECMAScript) is a trademarked scripting-language specification created to standardize JavaScript.
As the name suggests, ES6 (later renamed to ES2015) is the sixth edition and came with significant new syntax for writing complex applications,
including classes and modules. Some browsers do not (or only partially) support ES6, but the ES6 code can be transpiled in
ES5, which enjoys a broader compability.

JavaScript frameworks and libraries to build modern web-applications are written in ES6.

## `import`
```javascript
import { CircleMenu } from 'react-geo';
```

### `export`
```javascript
const name = 'Peter';
export default name;
```

## Variable declaration

- ES5: `var`
- ES6: `var`, `let` and `const`:
  * scope dependent

### Function definition

```javascript
// ES5
var myFunc = fucntion (myArg) {
  if (!myArg) {
    myArg = 'Peter'
  };
  return myArg + ' is the best arg!';
}
// ES6
const myFunc = (myArg = 'Peter') => {
  return myArg + ' is the best arg!';
} // myFunc() ----> 'Peter is the best arg!'
// ES6 shortened
const myFunc = myArg => myArg + ' is the best arg!';
```

### Template string
```javascript
// ES5
var a = 1909;
console.log('Year: ' + a)
// ES6
console.log(`Year ${a}`)
```

### Destructuring assignment

See also [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

*Example 1*: Object destructuring 

```javascript
// ES5
var obj = {
  name: 'Peter',
  age: 55
}
var age = obj.age;

// ES6
const obj = {
  name: 'Peter',
  age: 55
}
const {
  age
} = obj;
```

*Example 2* (also uses [Spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)):

```javascript
// ES5
var user = {name: 'peter', age: 12};
user = Object.assign(user, {email: 'peter@love.de'});
// ES6
let user = {name: 'peter', age: 12};
user = {...user, email: 'peter@love.de'};
```
