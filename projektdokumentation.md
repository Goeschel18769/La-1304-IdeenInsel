# Projekt-Dokumentation


Die Ideeninsel-Producer: Joël Haldimann, Ben Müller und Janick Hurschler.

 | Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
| 28.02.2024      | 0.0.1   | Startschuss für das Projekt Ideen Insel |
| 06.03.2024      | 0.0.2   |   Implementieren von Firebase SDK und Erstellung des Grundgerüstes.                                                           |
| 08.05.2024      | 1.0.0   |   Vervollständigen des Grundgerüstes und Erstellen des Designs und des GUI's                                                           |

## 1 Informieren

### 1.1 Ihr Projekt

Wir haben uns dazu entschieden eine Website zu machen in der Leute ihre Ideen und Notizen speichern können, um andere Leute auf Ideen zu bringen.


### 1.2 User Stories

| US-№ | Verbindlichkeit | Typ  | Beschreibung                       |
| ---- | --------------- | ---- | ---------------------------------- |
| 1    |       Muss          |   Qualität   | Als Benutzer möchte ich eine neue Notiz erstellen können, um meine Gedanken und Informationen festzuhalten. |
| 2  |       Muss          |   Funktional   |      Als Benutzer möchte ich meine existierenden Notizen anzeigen können, um schnell auf meine Informationen zugreifen zu können.|
| 3  |        Muss         |  Funktional    |  Als Benutzer möchte ich, dass ich alle Notizen die auf der App gemacht werden sehen können, dass ich mehr Ideen bekomme      |
| 4  |       Kann          |  Qualität    |  Als Benutzer möchte ich eine Notiz löschen können, wenn sie nicht mehr benötigt wird.                                  |
| 5  |       Kann          |  Funktional    |  Als Benutzer möchte ich, dass die Anwendung schnell und reibungslos funktioniert, um eine gute Benutzererfahrung zu gewährleisten.     |
| 6  |       Kann          |  Qualität    |  Als Benutzer möchte ich ein einfach zu verstehendes Interface haben, dass ich die App ohne Probleme bedienen kann                          |






### 1.3 Testfälle


| US-№ | Testfall-№ | Beschreibung                                                                                                 | Erwartetes Ergebnis                                                                                                  |
| ---- | ---------- | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| 1    | 1.1        | Erstelle eine neue Notiz mit dem Text "Webseite für Ideen programmieren".                                                       | Die neue Notiz "Webseite für Ideen programmieren" wird in der Liste der Notizen angezeigt.            |
| 1    | 1.2        | Erstelle eine neue Notiz ohne Textinhalt.                                                                    | Die Anwendung lässt keine leere Notiz erstellen.                                        |
| 2    | 2.1        | Öffne die App und überprüfe, ob bestehende Notizen angezeigt werden.                                         | Alle zuvor erstellten Notizen werden in der Liste angezeigt.                                                         |
| 2    | 2.2        | Erstelle mehrere Notizen und prüfe, ob alle neuen Notizen in der Liste angezeigt werden.                    | Alle erstellten Notizen werden korrekt und vollständig in der Liste angezeigt.                                        |
| 3    | 3.1        | Erstelle eine Notiz und prüfe, ob sie auf der Hauptseite der App angezeigt wird.                             | Die erstellte Notiz wird auf der Hauptseite angezeigt.                                                               |
| 4    | 4.1        | Lösche eine vorhandene Notiz.                                                                                | Die gelöschte Notiz wird nicht mehr in der Liste der Notizen angezeigt.                                               |



## 2 Planen

| AP-№ | Frist | Zuständig | Beschreibung | geplante Zeit |
| ---- | ----- | --------- | ------------ | ------------- |
| 1.A  |  28.02.2024      |Joël|Setup der Entwicklungsumgebung|45 min|
|  1.B |  06.03.2024      |Ben|Testfallerstellung und -durchführung für Anmeldeseite |        2*45 min |
| 2.A  |  13.03.2024      | Joël |Implementierung der Notizerstellungsfunktion|3*45 min|
| 2.B  |  20.03.2024       |Janick |Implementierung der Notizanzeigefunktion |3*45 min |
| 2.C  |  27.03.2024     | Ben |Testfallerstellung und -durchführung für Notizerstellung und -anzeige |2*45 min |
| 3.A  |  10.04.2024      | Ben |Implementierung der Notizbearbeitungsfunktion |3*45 min|
| 3.B  |   17.04.2024      | Janick|Implementierung der Notizlöschungsfunktion|3*45 min|
| 3.C  |   24.04.2024     | Joël | Testfallerstellung und -durchführung für Notizbearbeitung und -löschung |2*45 min |
| 4.A  |   01.05.2024    | Janick  |Test des Gesamtsystems | 45 min |
| 4.B  |   08.05.2024     | Ben|Dokumentation der gesamten Entwicklung | 2*45min |

Total: 22 Arbeitspakete

## 3 Entscheiden
Wir haben uns für eine WebApp mit React und Firebase (Firestore) entschieden.

## 4 Realisieren
| AP-№ | Datum      | Zuständig | geplante Zeit | tatsächliche Zeit |
| ---- | ---------- | --------- | ------------- | ----------------- |
| 1.A  | 28.02.2024 | Joël      | 45 min        | 45 min            |
| 1.C  | 06.03.2024 | Janick    | 2*45 min      | 2*45 min          |
| 2.A  | 13.03.2024 | Joël      | 3*45 min      | 3*45 min          |
| 2.B  | 20.03.2024 | Janick    | 3*45 min      | 3*45 min          |
| 2.C  | 27.03.2024 | Ben       | 2*45 min      | 2*45 min          |
| 3.A  | 10.04.2024 | Ben       | 3*45 min      | 3*45 min          |
| 3.B  | 17.04.2024 | Janick    | 3*45 min      | 3*45 min          |
| 3.C  | 24.04.2024 | Joël      | 2*45 min      | 2*45 min          |
| 4.A  | 01.05.2024 | Janick    | 45 min        | 45 min            |
| 4.B  | 08.05.2024 | Ben       | 2*45 min      | 2*45 min          |




## 5 Kontrollieren

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  | 08.05.2024      |    OK      |   Joël     |
| 1.2  | 08.05.2024         |    OK      |    Ben    |
| 2.1  |  08.05.2024        |      OK    |    Joël    |
| 2.2  |  08.05.2024        |        OK  |   Joël     |
| 3.1  | 08.05.2024         |      OK    |    Ben    |
| 4.1  |  08.05.2024        |        OK  |    Joël    |








