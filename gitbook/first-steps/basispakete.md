# Dependencies hinzufügen
### GeoStyler dependency hinzufügen

Um die `GeoStyler` dependency hinzuzufügen, navigieren Sie bitte (falls noch nicht geschehen) zum Ordner
Ihres Projektes und führen Sie dort folgenden Befehl aus

```javascript
npm install geostyler@721
```

> **info**
> Für die Eingabe dieses Befehls müssen Sie ein neues Terminal öffnen und erneut zu Ihrem Ordner 
> navigieren.

Dies fügt die neuste Version von `GeoStyler` zu Ihrer lokalen `package.json` Datei hinzu und lädt 
die Bibliothek in das Verzeichnis `node_modules`.

### react-geo dependency hinzufügen

Analog gilt dies für die `react-geo` dependency:

```
npm i @terrestris/react-geo
```

### Ant Design und OpenLayers dependencies hinzufügen

Sie haben vielleicht bemerkt, dass der Schritt von oben einige Warnungen hervorgerufen hat, die `GeoStyler` einschließen:

<pre><xmp>npm WARN geostyler@7.2.1 requires a peer of antd@"4.x but none is installed. You must install peer dependencies yourself.
npm WARN geostyler@7.2.1 requires a peer of ol@6.x but none is installed. You must install peer dependencies yourself.</xmp></pre>

`npm` hat drei verschiedene Arten von dependencies:

#### `dependencies`

[dependencies](https://docs.npmjs.com/files/package.json#dependencies) werden verwendet, um 
Pakete direkt zu spezifizieren, die zum *ausführen* des Codes Ihrer Anwendung benötigt werden (z.B. eine 
Frond-End Bibliothek wie [Bootstrap](https://getbootstrap.com/)).

#### `devDependecies`

[devDependencies](https://docs.npmjs.com/files/package.json#devdependencies)
sind reserviert, um Pakete anzugeben, die zum *bauen* des Codes Ihrer Anwendung benötigt werden (z.B.
test harnesses wie [Jest](https://facebook.github.io/jest/) oder Transpiler wie
[Babel](https://babeljs.io/)).

#### `peerDependencies`

Unter bestimmten Bedingungen möchte man jedoch die *Kompatibilität* eines bestimmten Pakets mit dem Host-Paket audrücken. Npm bezeichnet diese dependency als [peerDependencies](https://docs.npmjs.com/files/package.json#peerdependencies).
Normalerweise wird dies verwendet, um die Abhängigkeit eines Plugins innerhalb dieses oder eines ähnlichen Host-Pakets auszudrücken. In `react-geo` müssen wir `antd`, `ol` und `react` als *peer dependencies* aufgrund von scope Problemen definieren, da sie alle normalerweise vom Host-Paket/er Anwendung selbst in einer bestimmten Version referenziert wurden.

Da `npm` Abhängigkeiten hierarchisch behandelt, würde die doppelte Einbeziehung dieser Pakete in `react-geo` zu zwei verschiedenen *dependencies* führen, die in Ihrer Anwendung zur Laufzeit verfügbar sind. Um die Abhängigkeiten zwischen Ihrer Host-Anwendung und `react-geo` zu teilen, empfehlen wir `react-geo`, die vom Host-Paket gegebenen *dependencies* zu verwenden.

Um diese Anforderungen zu erfüllen, müssen wir die gewünschten *peer dependencies* mit folgendem Befehl installieren:

```
npm i antd@4.x ol@6
```

Jetzt sind wir bereit, alle `react-geo` Komponenten innerhalb
unserer *{{ book.reactAppName }}* Anwendung zu verwenden.

Neben der grundlegenden React Anwendung werden wir im
Folgenden Unterkapitel weitere Dateien für die CoVid-19 Map 
erstellen.
