<template>
  <v-container fluid>
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
      groupeWords: [
        { name: "you", amount: 900 },
        { name: "satan", amount: 666 },
        { name: "i", amount: 665 },
        { name: "he", amount: 668 },
      ],
    };
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