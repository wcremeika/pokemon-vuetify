<template>
  <!-- <pokemon :pokemon="pokemon"></pokemon> -->
  <div>
    <div v-if="!pokemon">Loading...</div>
    <div v-else>
      <v-card>
        <v-card-title>{{ pokemon.name }}</v-card-title>
      </v-card>
    </div>
  </div>
</template>

<script src="./PokemonDetail.controller.js"></script>
