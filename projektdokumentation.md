# Projekt-Dokumentation


Die Ideeninsel producer Joël Haldimann, Ben Müller und Janick Hurschler

 | Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
| 28.02.2024      | 0.0.1   | Startschuss für das Projekt Ideen Insel |
| 06.03.2024      | 0.0.2   |                                                              |
| 13.03.2024      | 0.0.3   |                                                              |
| 20.03.2024      | 0.0.4   |                                                              |
| 27.03.2024      | 0.0.5   |                                                              |
| 03.04.2024      | 0.0.6   |                                                              |
| 10.04.2024      | 0.0.7   |                                                              |
| 17.04.2024      | 0.0.8   |                                                              |
| 24.04.2024      | 0.0.9   |                                                              |
| 01.05.2024      | 0.0.10  |                                                              |
| 08.05.2024      | 1.0.0   |                                                              |

## 1 Informieren

### 1.1 Ihr Projekt

Wir haben uns dazu entschieden eine Webesite zu machen in denne Leute ihre Ideen und Notizen speichern können um andere Leute auf Ideen zu bringen.


### 1.2 User Stories

| US-№ | Verbindlichkeit | Typ  | Beschreibung                       |
| ---- | --------------- | ---- | ---------------------------------- |
| 1    |       Muss          |   Qualität   | Als Benutzer möchte ich eine neue Notiz erstellen können, um meine Gedanken und Informationen festzuhalten. |
| 2  |       Muss          |   Funktional   |      Als Benutzer möchte ich meine existierenden Notizen anzeigen können, um schnell auf meine Informationen zugreifen zu können.                              |
| 3  |        Muss         |  Funktional    |  Als Benutzer möchte ich, dass ich alle Notizen die auf der App gemacht werden sehen können, dass ich mehr Ideen bekomme                            |
| 4  |       Kann          |  Qualität    |  Als Benutzer möchte ich eine Notiz löschen können, wenn sie nicht mehr benötigt wird.                                  |
| 5  |       Kann          |  Funktional    |  Als Benutzer möchte ich, dass die Anwendung schnell und reibungslos funktioniert, um eine gute Benutzererfahrung zu gewährleisten.                              |
| 6  |       Kann          |  Qualität    |  Als Benutzer möchte ich ein einfach zu verstehendes Interface haben, dass ich die App ohne Probleme bedienen kann                          |






### 1.3 Testfälle


| US-№ | Testfall-№ | Beschreibung                                                                                                 | Erwartetes Ergebnis                                                                                                  |
| ---- | ---------- | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| 1    | 1.1        | Erstelle eine neue Notiz mit dem Text "Einkaufsliste".                                                       | Die neue Notiz "Einkaufsliste" wird in der Liste der Notizen angezeigt.                                              |
| 1    | 1.2        | Erstelle eine neue Notiz ohne Textinhalt.                                                                    | Die Anwendung lässt keine leere Notiz erstellen.                                        |
| 2    | 2.1        | Öffne die App und überprüfe, ob bestehende Notizen angezeigt werden.                                         | Alle zuvor erstellten Notizen werden in der Liste angezeigt.                                                         |
| 2    | 2.2        | Erstelle mehrere Notizen und prüfe, ob alle neuen Notizen in der Liste angezeigt werden.                    | Alle erstellten Notizen werden korrekt und vollständig in der Liste angezeigt.                                        |
| 3    | 3.1        | Erstelle eine Notiz und prüfe, ob sie auf der Hauptseite der App angezeigt wird.                             | Die erstellte Notiz wird auf der Hauptseite angezeigt.                                                               |
| 4    | 4.1        | Lösche eine vorhandene Notiz.                                                                                | Die gelöschte Notiz wird nicht mehr in der Liste der Notizen angezeigt.                                               |



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
| 1.A  |       | Joël      | 45 min        |                   |
| 1.B  |       | Ben       | 3*45 min      |                   |
| 1.C  |       | Janick    | 2*45 min      |                   |
| 2.A  |       | Joël      | 3*45 min      |                   |
| 2.B  |       | Janick    | 3*45 min      |                   |
| 2.C  |       | Ben       | 2*45 min      |                   |
| 3.A  |       | Ben       | 3*45 min      |                   |
| 3.B  |       | Janick    | 3*45 min      |                   |
| 3.C  |       | Joël      | 2*45 min      |                   |
| 4.A  |       | Janick    | 45 min        |                   |
| 4.B  |       | Ben       | 45 min        |                   |

## 🗒️ Answer
Die Tabelle wurde entsprechend angepasst, indem die Fristen durch Datum, die Beschreibung durch geplante Zeit ersetzt und die tatsächliche Zeit hinzugefügt wurden.

## 🌐 Sources
1. [docs.celonis.com - MERGE_EVENTLOG - MERGE_EVENTLOG_DISTINCT](https://docs.celonis.com/en/merge_eventlog---merge_eventlog_distinct.html)
2. [community.sap.com - Solved: internal tables merging](https://community.sap.com/t5/enterprise-resource-planning-q-a/internal-tables-merging/qaq-p/1012423)
3. [learn.microsoft.com - MERGE (Transact-SQL) - SQL Server](https://learn.microsoft.com/en-us/sql/t-sql/statements/merge-transact-sql?view=sql-server-ver16)
4. [mathworks.com - MATLAB join](https://www.mathworks.com/help/matlab/ref/table.join.html)
5. [cloud.google.com - BigQuery release notes](https://cloud.google.com/bigquery/docs/release-notes)
6. [eurocontrol.int - THE MANUAL](https://www.eurocontrol.int/sites/default/files/publication/files/airport-cdm-manual-2017.PDF)
</response>

✍️ Tragen Sie jedes Mal, wenn Sie ein Arbeitspaket abschließen, hier ein, wie lang Sie effektiv dafür hatten.

## 5 Kontrollieren

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |       |          |        |
| ...  |       |          |        |

✍️ Vergessen Sie nicht, ein Fazit hinzuzufügen, welches das Test-Ergebnis einordnet.

## 6 Auswerten

✍️ Fügen Sie hier eine Verknüpfung zu Ihrem Lern-Bericht ein.

