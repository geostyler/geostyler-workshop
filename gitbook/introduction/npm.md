# npm

[npm](http://npmjs.com) ist der Paketmanager für Node.js (eine JavaScript-Laufzeitumgebung)
und die weltweit größte Software-Registry (mehr als 600k Pakete)
mit etwa 3 Milliarden Download pro Woche

<img src="../images/npm-logo.png" alt="" style="width: 200px;"/>

Sie können npm verwenden, um:

- Pakete an Ihre Anwendungen anzupassen oder sie so einbinden, wie sie sind.

- Eigenständige Tools herunterzuladen, die Sie sofort verwenden können.

- Pakete ohne Herunterladen mit npx auszuführen.

- Code mit jedem npm-Benutzer überall zu teilen.

- Den Code auf bestimmte Entwickler zu beschränken.

- Virtuelle Teams (Orgs) zu bilden.

- Mehrere Versionen von Code und Code-Abhängigkeiten (dependencies) zu verwalten.

- Anwendungen zu aktualisieren, wenn der zugrunde Liegende Code aktualisiert wird.

- Andere Entwickler zu finden, die an ähnlichen Problemen arbeiten.

### package.json

Der Befehl `npm init` in Ihrem Projektordner öffnet einen interaktiven Dialog zur Einrichtung eines npm-Projekts.
Das Ergebnis ist das `package.json` mit allen wichtigen Einstellungen, Skripten und Abhängigkeiten (dependencies)
Ihres Projekts.

```
{
  "name": "name_of_your_package",
  "version": "1.0.0",
  "description": "This is just a test",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "http://github.com/yourname/name_of_your_package.git"
  },
  "author": "your_name",
  "license": "ISC"
}
```

Bitte lesen Sie die [npm docs](https://docs.npmjs.com/) für weitere Informationen.

### Pakete mit npm installieren

Die gebräuchlichste Art, neue Pakete mit npm zu installieren, ist über die [Kommandozeile](https://docs.npmjs.com/cli/npm).
Um ein Paket zu installieren, geben Sie einfach folgendes ein:

`npm install packagename`

Sie finden die installierten Pakete im Unterordner `node_modules`.

# Node version manager NVM

- bash-Skript zur Verwaltung mehrerer aktiver node.js-Versionen
- Siehe [hier](https://github.com/creationix/nvm)

```
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
nvm i v8
```
