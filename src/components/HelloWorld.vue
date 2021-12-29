<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12"> {{ text }} </v-col>
      <v-text-field v-model="newText"></v-text-field>
      <v-btn @click="changeText()">Click to change</v-btn>
      <v-btn @click="fetchText()">Click to change (async)</v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => HelloWorldController,
};

const HelloWorldController = {
  text: "hello there!",
  newText: null,
  changeText() {
    this.text = this.newText;
  },
  async fetchText() {
    this.text = await HelloWorldService.fetchText();
  },
};

const HelloWorldService = {
  async fetchText() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const json = await response.json();
    return json.name;
  },
};
</script>
