hôla
# Projekt-Dokumentation

☝️ Alle Text-Stellen, welche mit einem ✍️ beginnen, können Sie löschen, sobald Sie die entsprechende Stellen ausgefüllt haben.

Die Ideen Insel Machenden, Joël Haldimann, Bn Müll, Janc

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
| 28.02.2024      | 0.0.1   | Startschuss für das Projekt Ideen Insel |
|       | ...     |                                                              |
|       | 1.0.0   |                                                              |

## 1 Informieren

### 1.1 Ihr Projekt

✍️ Beschreiben Sie Ihr Projekt in einem griffigen Satz.

✍️ Erklären Sie genauer in 50 bis 100 Wörtern, was genau Sie in diesem Projekt erreichen möchten, und was Sie dabei zu lernen hoffen.

### 1.2 User Stories

| US-№ | Verbindlichkeit | Typ  | Beschreibung                       |
| ---- | --------------- | ---- | ---------------------------------- |
| 1    |       Muss          |   Qualität   | Als Benutzer möchte ich mich in der Anwendung anmelden können, um meine Notizen personalisiert zu verwalten. |
| 2  |       Muss          |   Funktional   |      Als Benutzer möchte ich eine neue Notiz erstellen können, um meine Gedanken und Informationen festzuhalten.                              |
| 3  |        Muss         |  Funktional    |               Als Benutzer möchte ich meine existierenden Notizen anzeigen können, um schnell auf meine Informationen zugreifen zu können.                     |
| 4  |       Muss          |  Qualität    |  Als Benutzer möchte ich eine vorhandene Notiz bearbeiten können, um Aktualisierungen vorzunehmen.                                  |
| 5  |       Muss          |  Qualität    |  Als Benutzer möchte ich eine Notiz löschen können, wenn sie nicht mehr benötigt wird.                                  |
| 6  |        Kann         |  Qualität    |       Als Benutzer möchte ich meine Notizen nach Kategorien oder Tags organisieren können, um sie besser zu strukturieren.                             |
| 7  |      Muss           |  Qualität    |   Als Benutzer möchte ich meine Notizen über verschiedene Geräte synchronisieren können, um flexibel arbeiten zu können.                                 |


✍️ Jede User Story hat eine ganzzahlige Nummer (1, 2, 3 etc.), eine Verbindlichkeit (Muss oder Kann?), und einen Typ (Funktional, Qualität, Rand). Die User Story selber hat folgende Form: *Als ein 🤷‍♂️ möchte ich 🤷‍♂️, damit 🤷‍♂️*.

### 1.3 Testfälle

| TC-№ | Ausgangslage | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1.1  |     Der Benutzer befindet sich auf der Anmeldeseite.         |    Der Benutzer gibt gültige Anmeldeinformationen ein und klickt auf "Anmelden".     |  Der Benutzer wird erfolgreich angemeldet und auf die Hauptseite der Anwendung weitergeleitet.                 |
| 1.2  |Der Benutzer befindet sich auf der Anmeldeseite. |Der Benutzer gibt ungültige Anmeldeinformationen ein und klickt auf "Anmelden". | Die Anmeldung wird abgelehnt, und eine entsprechende Fehlermeldung wird angezeigt. |
|  2.1 |Der Benutzer ist angemeldet und auf der Hauptseite der Anwendung. | Der Benutzer erstellt eine neue Notiz. | Die Notiz wird erfolgreich in der Datenbank gespeichert, und sie wird auf der Benutzeroberfläche angezeigt. |
|  2.2 | Der Benutzer hat bereits Notizen erstellt.|Der Benutzer überprüft die Liste seiner Notizen.|Alle erstellten Notizen werden übersichtlich auf der Benutzeroberfläche angezeigt. |
| 3.1  |Der Benutzer hat eine bestehende Notiz.|Der Benutzer bearbeitet die Inhalte der Notiz und speichert die Änderungen. | Die Änderungen werden erfolgreich gespeichert, und die aktualisierte Notiz wird auf der Oberfläche angezeigt. |
| 4.1  | Der Benutzer hat eine bestehende Notiz.|Der Benutzer löscht die Notiz.| Die Notiz wird aus der Datenbank entfernt, und sie verschwindet von der Benutzeroberfläche.|
| 5.1  |Der Benutzer erstellt eine Notiz auf einem Gerät. |Der Benutzer überprüft, ob die Notiz auf anderen Geräten korrekt angezeigt wird. | Die erstellte Notiz ist auf allen Geräten des Benutzers konsistent und aktuell. |


✍️ Die Nummer hat das Format `N.m`, wobei `N` die Nummer der User Story ist, die der Testfall abdeckt, und `m` von `1` an nach oben gezählt. Beispiel: Der dritte Testfall, der die zweite User Story abdeckt, hat also die Nummer `2.3`.

### 1.4 Diagramme

✍️Fügen Sie hier ein Use Case-Diagramm mit mindestens 3 Anwendungsfällen ein; und eine Skizze davon, wie Ihre Netzseite aussehen sollte.

## 2 Planen

| AP-№ | Frist | Zuständig | Beschreibung | geplante Zeit |
| ---- | ----- | --------- | ------------ | ------------- |
| 1.A  |       |Joël|Setup der Entwicklungsumgebung|45 min|
|  1.B |       |Ben|Erstellung der Anmeldeseite und Authentifizierungsfunktionen |    3*45 min |
|  1.C |       |Janick|Testfallerstellung und -durchführung für Anmeldeseite |        2*45 min |
| 2.A  |       | Joël |Implementierung der Notizerstellungsfunktion|3*45 min|
| 2.B  |       |Janick |Implementierung der Notizanzeigefunktion |3*45 min |
| 2.C  |       | Ben |Testfallerstellung und -durchführung für Notizerstellung und -anzeige |2*45 min |
| 3.A  |       | Ben |Implementierung der Notizbearbeitungsfunktion |3*45 min|
| 3.B  |       | Janick|Implementierung der Notizlöschungsfunktion|3*45 min|
| 3.C  |       | Joël | Testfallerstellung und -durchführung für Notizbearbeitung und -löschung |2*45 min |
| 4.A  |       | Janick  |Test des Gesamtsystems | 45 min |
| 4.B  |       | Ben|Dokumentation der gesamten Entwicklung | 45min |


Total: 24 Arbeitspakete

✍️ Die Nummer hat das Format `N.m`, wobei `N` die Nummer der User Story ist, auf die sich das Arbeitspaket bezieht, und `m` von `A` an nach oben buchstabiert. Beispiel: Das dritte Arbeitspaket, das die zweite User Story betrifft, hat also die Nummer `2.C`.

✍️ Ein Arbeitspaket sollte etwa 45' für eine Person in Anspruch nehmen. Die totale Anzahl Arbeitspakete sollte etwa Folgendem entsprechen: `Anzahl R-Sitzungen` ╳ `Anzahl Gruppenmitglieder` ╳ `4`. Wenn Sie also zu dritt an einem Projekt arbeiten, für welches zwei R-Sitzungen geplant sind, sollten Sie auf `2` ╳ `3` ╳`4` = `24` Arbeitspakete kommen. Sollten Sie merken, dass Sie hier nicht genügend Arbeitspakte haben, denken Sie sich weitere "Kann"-User Stories für Kapitel 1.2 aus.

## 3 Entscheiden

✍️ Dokumentieren Sie hier Ihre Entscheidungen und Annahmen, die Sie im Bezug auf Ihre User Stories und die Implementierung getroffen haben.

## 4 Realisieren

| AP-№ | Datum | Zuständig | geplante Zeit | tatsächliche Zeit |
| ---- | ----- | --------- | ------------- | ----------------- |
| 1.A  |       |           |               |                   |
| ...  |       |           |               |                   |

✍️ Tragen Sie jedes Mal, wenn Sie ein Arbeitspaket abschließen, hier ein, wie lang Sie effektiv dafür hatten.

## 5 Kontrollieren

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |       |          |        |
| ...  |       |          |        |

✍️ Vergessen Sie nicht, ein Fazit hinzuzufügen, welches das Test-Ergebnis einordnet.

## 6 Auswerten

✍️ Fügen Sie hier eine Verknüpfung zu Ihrem Lern-Bericht ein.

