#ES6

<img src="../images/es6-logo.jpg" alt="" style="width: 150px;"/>

ES (ECMAScript) ist eine markenrechtlich geschütze Spezifikation der Skriptsprache, die zur Standardisierung von JavaScript
erstellt wurde. Wie der Name schon verrät, ist ES6 (später in ES2015 unbenannt) die sechste Ausgabe und wurde mit einer bedeutenden
neuen Syntax zum Schreiben komplexer Anwendungen ausgestattet, einschließlich Klassen und Module. Einige Browser unterstützen
ES6 nicht (oder nur teilweise), weswegen der ES6 Code in ES5 transiliert werden kann. ES5 genießt eine breitere Kompabilität.

JavaScript-Frameworks und Bilbiotheken zur Erstellung moderner Webanwendunge sind in ES6 geschrieben.

## `import`

```javascript
import { CircleMenu } from "react-geo";
```

### `export`

```javascript
const name = "Peter";
export default name;
```

## Variablen Deklaration

- ES5: `var`
- ES6: `var`, `let` und `const`:
  - scope abhängig

### Funktionen

```javascript
// ES5
var myFunc = function(myArg) {
  if (!myArg) {
    myArg = "Peter";
  }
  return myArg + " is the best arg!";
};
// ES6
const myFunc = (myArg = "Peter") => {
  return myArg + " is the best arg!";
}; // myFunc() ----> 'Peter is the best arg!'
// ES6 shortened
const myFunc = myArg => myArg + " is the best arg!";
```

### Template string

```javascript
// ES5
var a = 1909;
console.log("Year: " + a);
// ES6
console.log(`Year ${a}`);
```

### Destructuring assignment

Siehe auch [hier](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

_Beispiel 1_: Objekt Destrukturierung (Object destructuring)

```javascript
// ES5
var obj = {
  name: "Peter",
  age: 55
};
var age = obj.age;

// ES6
const obj = {
  name: "Peter",
  age: 55
};
const { age } = obj;
```

_Beispiel 2_ (verwendet auch den [Spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)):

```javascript
// ES5
var user = { name: "peter", age: 12 };
user = Object.assign(user, { email: "peter@love.de" });
// ES6
let user = { name: "peter", age: 12 };
user = { ...user, email: "peter@love.de" };
```
