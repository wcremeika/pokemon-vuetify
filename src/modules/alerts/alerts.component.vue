<template>
  <div>
    <div v-for="alert in alerts" :key="alert.text">
      <v-alert :type="alert.type" v-html="alert.text"></v-alert>
    </div>
  </div>
</template>

<script>
import alertsService from "./alerts.service";

export default {
  name: "Alerts",
  computed: {
    alerts: () => alertsService.alerts,
  },
  watch: {
    alerts: {
      handler: (v) => {
        if ("length" in v && v.length) {
          console.log("set timer");
          setTimeout(() => (alertsService.alerts = []), 3000);
        }
      },
      immediate: true,
    },
  },
};
</script>

<style>
</style>