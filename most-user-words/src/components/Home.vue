<template>
  <v-container fluid>
    <v-form>
      <v-file-input outlined append-outer-icon="mdi-send" prepend-icon="mdi-message-text" label="Selecione as Legendas" multiple chips v-model="files" @click:append-outer="processSubtitles"/>
    </v-form>
    <div class="pills">
      <Pill
        v-for="word in groupeWords"
        :key="word.name"
        :name="word.name"
        :amount="word.amount"
      />
    </div>
  </v-container>
</template>

<script>
import Pill from "./Pill";
export default {
  components: { Pill },
  data: function () {
    return {
      files: [],
      groupeWords: [
        { name: "you", amount: 900 },
        { name: "satan", amount: 666 },
        { name: "i", amount: 665 },
        { name: "he", amount: 668 },
      ],
    };
  },
  methods: {
    processSubtitles() {
      console.log(this.files);
    },
  },
};
</script>

<style>
.pills {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>