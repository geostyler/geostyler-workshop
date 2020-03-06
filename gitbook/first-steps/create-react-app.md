# First steps

As a matter of course we could start this workshop by creating a React based
webapplication by hand, but as you could imagine this would be a tough job for
starters. So we want to dive into react-geo directly without the need to stick
together all development tools to get a webapp running. Thankfully there is a
project available, that we can use to generate an application for us (even without
any configuration!): [create-react-app](https://github.com/facebook/create-react-app).

Creating a new application is easy. Just navigate to a folder of your choice and
create a new app named *{{ book.reactAppName }}* inside this directory with:

<pre><xmp>npx create-react-app {{ book.reactAppName }}</xmp></pre>

This will take a while, but finally you will see a list of commands you can run
inside the created folder. Now switch to the project's folder with:

<pre><xmp>cd {{ book.reactAppName }}</xmp></pre>

Finally we can start the development server with:

```
npm start
```

To view the application in your browser please open [http://localhost:3000/](http://localhost:3000/).

[![](../screenshots/cra_startpage.png)](../screenshots/cra-startpage.png)