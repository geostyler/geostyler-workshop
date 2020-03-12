<center><img src="images/geo-styler-logo.jpg" style="width:650px;"/></center>

# _{{ book.workshopName }}_

Herzlich Willkommen beim **{{ book.workshopName }}**. Dieser Workshop soll Ihnen einen einführenden
Überblick über den GeoStyler als ein webbasiertes Werkzeug zur interaktiven Erstellung von kartographischen Style-Vorschriften für Geodaten geben.

Grundsätzlich werden wir in diesem Workshop eine einfache Anwendung schreiben, mit der Sie eine 
Story Map über CoVid-19 erstellen können. Die fertige Anwendung, wie Sie sie in diesem Workshop "bauen" werden, kann [hier](https://geostyler.github.io/geostyler-workshop/app) eingesehen werden.
<br>

> **info**
> Wenn Sie diese Seite auf Ihrem eigenen Gerät besuchen oder die PDF-Version ausdrucken möchten,
> dann können Sie die Workshop-Materialien [hier]({{ book.workshopDownloadUrl }}) herunterladen.

## Setup

Die folgenden Anweisungen und Übungen setzen voraus, dass Sie bestimmte Anforderungen an ihre lokale Maschine
erfüllt haben. Bitte prüfen Sie, ob Sie folgende Voraussetzungen installiert haben:

- Einen geeigneten Text Editor, wie z.B.[Atom](https://atom.io/).
- [NodeJS](https://nodejs.org/en/) in Version 6.

  > **info**
  > Die aktuell auf ihrer lokalen Maschine installierte Node Version können Sie mit dem Befehl
  > `node -v` in Ihrem Terminal ansehen. Falls diese Version nicht der
  > für diesen Workshop notwendigen Version 6 entspricht, können Sie
  > ganz einfach mit dem Befehl `nvm use 6` die Node Version wechseln.

<br>
Alles eingerichtet? Dann los geht's!

## Überblick

Der Workshop ist aus einer Reihe von Modulen zusammengestellt. In jedem Modul werden
Sie eine Reihe von Aufgaben lösen, um ein bestimmtes Ziel zu erreichen. Jedes Modul baut
Ihre Wissensbasis iterativ auf.

Die folgenden Module werden in diesem Workshop behandelt:

- [Grundlagen](./introduction/README.md) - Tauchen Sie in die Grundlagen von EcmaScript 6, React und npm ein.
- [Erste Schritte](first-steps/index.md) - Lernen Sie, wie Sie Ihre eigene React-App erstellen und wie Sie react-geo darin einbinden können.
- [GeoStyler einbinden](geostyler/index.md) - Erweitern Sie ihre Anwendung mit GeoStyler.

## Autoren

{% for author in book.authors %}

- {{ author.name }} ([{{ author.mail }}](mailto:{{ author.mail }}))
  {% endfor %}
