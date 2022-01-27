<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        {{ pokemon.name }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Pokemon",
  props: ["pokemon"],
};
</script>
