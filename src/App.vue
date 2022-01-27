<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-spacer></v-spacer>

      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <alerts />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import alerts from "./modules/alerts/alerts.component.vue";

export default {
  name: "App",
  components: {
    alerts,
  },
};
</script>
