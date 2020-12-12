<template>
  <div class="cv">
    <img src="../assets/Profilbild2020V2.png">
    <div class="cvcard">
      <b-card :title="title" :sub-title="subTitle">
        <b-list-group>
        <b-list-group-item class="cardItem">Entwicklung einer GIS Web-anwendung mithilfe Vue/x
(Java/Css/Html), .NetCore (C#), Postgresql</b-list-group-item>
        <b-list-group-item class="cardItem">Implementierung neuer Softwaremodule mittels agiler
Softwareentwicklung (scrum ,seit Mitte 2019 kanban)</b-list-group-item>
        <b-list-group-item class="cardItem">Ausarbeitung von User-stories in Tasks (Youtrack)</b-list-group-item>
        <b-list-group-item class="cardItem">Codereview (upsource)</b-list-group-item>
      </b-list-group>
      </b-card>
      <b-card :title="title" :sub-title="subTitle">
        <b-list-group>
        <b-list-group-item class="cardItem">Entwicklung einer GIS Web-anwendung mithilfe Vue/x
(Java/Css/Html), .NetCore (C#), Postgresql</b-list-group-item>
        <b-list-group-item class="cardItem">Implementierung neuer Softwaremodule mittels agiler
Softwareentwicklung (scrum ,seit Mitte 2019 kanban)</b-list-group-item>
        <b-list-group-item class="cardItem">Ausarbeitung von User-stories in Tasks (Youtrack)</b-list-group-item>
        <b-list-group-item class="cardItem">Codereview (upsource)</b-list-group-item>
      </b-list-group>
      </b-card>
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
      title: 'iXmap Services GmbH & Co. KG',
      subTitle: 'Softwareentwickler'
    }
  }
}
</script>

<style scoped>
.cv{
  padding-left: 30%;
  padding-right: 30%;
}
.cvcard{
  margin: 10px 10px;
}
.cardItem {
  text-align: left;
}
</style>
