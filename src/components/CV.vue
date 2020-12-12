<template>
  <div class="cv">
    <img src="../assets/Profilbild2020V2.png">
    <div class="cvcard">
      <div v-for="milestone in milestones"  :key="milestone.name" class="milestone">
        <b-button v-b-toggle="'collapse-' + milestone.id" variant="outline-secondary">{{ milestone.name }}</b-button>
        <b-collapse :id="'collapse-' + milestone.id" class="mt-2">
          <div v-for="station in milestone.stationen" :key="station" class="task">
            <b-card :title="station.title" :sub-title="station.subTitle">
              <b-list-group>
              <div v-for="task in station.tasks"  :key="task">
                <b-list-group-item class="cardItem">{{ task }}</b-list-group-item>
              </div>
              </b-list-group>
            </b-card>
          </div>
        </b-collapse>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CV',
  props: {
  },
  data() {
    return {
      milestones: [
        {
          id: 1,
          name: 'ARBEITSPLÄTZE',
          stationen:[{
            title: 'iXmap Services GmbH & Co. KG',
            subTitle: 'Softwareentwickler',
            tasks:[
              'Entwicklung einer GIS Web-anwendung mithilfe Vue/x (Java/Css/Html), .NetCore (C#), Postgresql',
              'Implementierung neuer Softwaremodule mittels agiler Softwareentwicklung (scrum ,seit Mitte 2019 kanban)',
              'Ausarbeitung von User-stories in Tasks (Youtrack)',
              'Codereview (upsource)'
            ]
          }]
        },
          {
            id: 2,
            name: 'WERKSTUDENTENTÄTIGKEIT/PRAKTIKUM ',
            stationen:[{
              title: 'Bachelorarbeit',
              subTitle: 'Erstellung einer Software zur Analyse des biometrischen Tippverhalten unter natürlichen und stressigen Situationen',
              tasks:[
                'Ausarbeitung des Softwareentwurfs',
                'Erstellung der Strukturelemente (UML Diagramme)',
                'Befüllen der Software mit eigenem Tippverhalten',
                'Definieren von Unterschiede/ Ähnlichkeiten in persönlichen Tippverhalten'
              ]
            },
            {
              title: 'Werkstudent in Abteilung P S&A Q RBG3',
              subTitle: 'Continental AG in Regensburg',
              tasks:[
                'Programmierung mit CVI Labwindows zur Auswertung von Sensordaten',
                'Vereinfachung und Umstrukturierung der Gasmessplatzsoftware',
                'Umsetzung von Änderungen in der Auswertesoftware'
              ]
            },
            {
              title: 'Pflichtpraktikum in Abteilung P S&A Q EES EG',
              subTitle: 'Continental AG in Regensburg',
              tasks:[
                'Erstellung einer Datenbankstruktur zur Speicherung von Sensordaten (SQL)',
                'Codieren der Datenbank/Logikelemente',
                'Implementierung einer Frontend Anwendung für Datenbankzugriffe',
                'Implementierung der Software in Unternehmensstruktur zur automatischen Ausführung '
              ]
            }]
          }
      ]
    }
  }
}
</script>

<style scoped>
.cv{
  padding-left: 30%;
  padding-right: 30%;
}
.milestone{
  margin: 5px 5px;
}
.cvcard{
  margin: 10px 10px;
}
.cardItem {
  text-align: left;
}
.task{
  margin: 5px 5px;
}

</style>
