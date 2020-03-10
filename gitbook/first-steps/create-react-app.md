# React Applikation erstellen

Natürlich könnten wir diesen Workshop damit beginnen, dass wir eine auf
React basierende Webanwendung von Hand erstellen, aber wie Sie sich vorstellen
können, wäre dies eine schwierige Aufgabe für den Anfang. Wir wollen also direkt
in React eintauchen, ohne die Notwendigkeit, alle Entwicklungswerkzeuge
zusammenzuhalten, um eine Webanwendung zum Laufen zu bringen. Glücklicherweise
gibt es ein Befehl, mit dem wir eine Anwendung für uns generieren können
(auch ohne jegliche Konfiguration!): [create-react-app](https://github.com/facebook/create-react-app).

Die Erstellung einer neuen Anwendung ist einfach. Hierfür muss nur zu einem
Ordner Ihrer Wahl navigiert werden und dort mit dem Namen _{{ book.reactAppName }}_ eine Anwendung
innerhalb dieses Verzeichnisses erstellt werden:

<pre><xmp>npx create-react-app {{ book.reactAppName }}</xmp></pre>

Dies wird eine Weile dauern. Sobald die Erstellung abgeschlossen ist, kann mit
folgendem Befehl in den Ordner des Projektes navigiert werden:

<pre><xmp>cd {{ book.reactAppName }}</xmp></pre>

Nun kann endlich der Entwicklungsserver gestartet werden. Hierfür muss folgender Befehl in das Terminal eingegeben werden:

```
npm start
```

***Aufgabe 1.***
Erstellen Sie eine React Anwendung mit <pre><xmp>npx create-react-app {{ book.reactAppName }}</xmp></pre> 
***Aufgabe 2.***
Navigieren Sie mit Ihrem Terminal in den Ordner und führen Sie dort den Befehl `npm start` aus.

> **info**
> Dies wird nur funktionieren, wenn Sie node (Version 6), sowie npm und nvm erfolgreich auf ihrer lokalen Maschine installiert haben.
> Der Befehl, um node Version 6 zu aktivieren, lautet `nvm use 6`.

Um die Anwendung in Ihrem Browser anzuzeigen, öffnen Sie bitte [http://localhost:3000/](http://localhost:3000/). Ihr Screen sollte nun wie folgt aus:

[![](../images/cra-startpage.png)](../images/cra-startpage.png)

Im Folgenden Unterkapitel werden wir uns kurz
den Entwicklungsserver anschauen.