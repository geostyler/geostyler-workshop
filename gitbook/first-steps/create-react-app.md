# React Applikation erstellen

Natürlich könnten wir diesen Workshop damit beginnen, dass wir eine auf 
React basierende Webanwendung von Hand erstellen, aber wie Sie sich vorstellen 
können, wäre dies eine schwierige Aufgabe für den Anfang. Wir wollen also direkt 
in react-geo eintauchen, ohne die Notwendigkeit, alle Entwicklungswerkzeuge 
zusammenzuhalten, um eine Webanwendung zum Laufen zu bringen. Glücklicherweise 
gibt es ein Projekt, mit dem wir eine Anwendung für uns generieren können 
(auch ohne jegliche Konfiguration!): [create-react-app](https://github.com/facebook/create-react-app).

Die Erstellung einer neuen Anwendung ist einfach. Navigieren Sie hierfür zu einem 
Ordner Ihrer Wahl und erstellen Sie eine neue Anwendung mit dem Namen *{{ book.reactAppName }}* 
innerhalb dieses Verzeichnisses:

<pre><xmp>npx create-react-app {{ book.reactAppName }}</xmp></pre>

Dies wird eine Weile dauern. Sobald die Erstellung abgeschlossen ist, können Sie sie mit 
folgendem Befehl in den Ordner des Projektes navigieren:

<pre><xmp>cd {{ book.reactAppName }}</xmp></pre>

Nun können wir endlich den Entwicklungsserver starten. Geben Sie hierfür den folgenden Befehl in Ihr Terminal ein:

```
npm start
```


Um die Anwendung in Ihrem Browser anzuzeigen, öffnen Sie bitte [http://localhost:3000/](http://localhost:3000/).

[![](../images/cra-startpage.png)](../images/cra-startpage.png)