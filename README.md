# Moonshiner

Ein individuelles WordPress-Dashboard, erstellt mit React.

## Projektübersicht
Das Ziel dieses Projekts ist es, ein maßgeschneidertes Dashboard für WordPress zu entwickeln, das mit React erstellt wurde. Es wurde besonderer Wert auf die Integration moderner Technologien wie SCSS und die Erstellung dynamischer APIs gelegt, um ein funktionales und ansprechendes Design zu bieten.

## Features
- **React-Integration in WordPress**: Implementierung von React basierend auf der Anleitung von Kinsta und der Dokumentation von @wordpress/script.
- **Individuelles Design**: Header, Footer und Dashboard-Komponenten wurden individuell gestaltet und eingebunden.
- **API-Integration**: Dynamische Abfrage von URLs und Sicherheitsfunktionen wurden implementiert.
- **Benutzerfreundlichkeit**: Ein leicht verständliches Design mit Schnellstartpunkten, Benutzerinformationen und weiteren Funktionen.

## Entwicklungsfortschritte

### React in WordPress
- Recherche zu React-Integration in WordPress.
  - Gefundene Anleitung: [Kinsta](https://kinsta.com/de/blog/wordpress-react-theme/).
- Erste Umsetzungen basierend auf der Anleitung von Kinsta und der Dokumentation von @wordpress/script.
- Probleme bei der Seitenerstellung wurden behoben.
- SCSS erfolgreich integriert.
- `variablen.scss` besser eingebunden, um Wiederverwendbarkeit und Konsistenz zu gewährleisten.
- Einfaches Styling für grundlegende Elemente wie Buttons und Container implementiert.

### Header und Footer
- Neue Dateien für Header und Footer erstellt.
- Fehler beim Einbinden der Dateien behoben.
- Styling entwickelt.
- Integration in die `App.js` vorgenommen.

### API
- Nach einer Anleitung wurde eine API erstellt.
- Dynamische URL-Abfrage hinzugefügt.
- Sicherheitsfunktionen integriert.

### Dashboard
- Erste Skizzen der Idee erstellt.
- Fehlende weitere Komponenten identifiziert und geplant.
- Dateien zur Strukturierung angelegt.
- Design aufgebaut.
- Rollen- und Benutzerinformationen verarbeitet.
- Schnellstartpunkte implementiert.
- Fake-Daten für Beiträge und Kommentare eingebunden.
- Ein leichtes und intuitives Design entwickelt.

## Ressourcen

### Websites
1. **[Eigene WordPress-Dashboard-Widgets erstellen](https://pressengers.de/tipps/individuelle-wordpress-dashboard-widgets/)**  
   Anleitung zur Erstellung individueller Widgets.
2. **[Anpassen des WordPress Admin Dashboards (6 Tipps)](https://www.wpbeginner.com/de/beginners-guide/how-to-customize-wordpress-admin-area-dashboard-for-beginners/)**  
   Leitfaden zur Anpassung des WordPress-Adminbereichs.
3. **[Wie man ein benutzerdefiniertes WordPress-Dashboard erstellt](https://kinsta.com/de/blog/benutzerdefiniertes-wordpress-dashboard/)**  
   Umfassende Anleitung zur individuellen Gestaltung des Dashboards.

### GitHub-Repositories
1. **[WordPress Dashboard-Themen](https://github.com/topics/wordpress-dashboard)**  
   Sammlung von Repositories zur Entwicklung und Anpassung des Dashboards.

### Videos
1. **[Eigene DASHBOARD WIDGETS in WORDPRESS erstellen (OHNE Plugin)](https://www.youtube.com/watch?v=auW5gaG6AUM)**  
   Video-Anleitung zur Erstellung benutzerdefinierter Widgets.

---

Speicherung des bevorzugten Designs (dunkel, hell) in einem Cookie geplant:
  - Beim Laden der Seite soll geprüft werden, ob ein Cookie mit dem Namen `theme-preference` existiert.
  - Falls vorhanden, soll das gespeicherte Design angewendet werden (dunkel oder hell).
  - Der Nutzer soll das Design manuell ändern können, und die Auswahl wird im Cookie gespeichert.
  - Umsetzung soll mit JavaScript und der `document.cookie`-API erfolgen.

## Anforderungen und fehlende Informationen
Ich werde jetzt die Übereinstimmung mit den ursprünglichen Anforderungen prüfen.
