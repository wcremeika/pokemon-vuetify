<template>
  <v-container>
    <v-row>
      <v-col :cols="selectedPokemon ? '4' : '12'">
        <v-card>
          <v-card-title> Pokemon Search </v-card-title>
          <v-card-subtitle>
            Search:
            <v-spacer></v-spacer>
            <v-text-field v-model="criteria" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
          </v-card-subtitle>
          <v-card-text>
            <v-data-table :items="data" :headers="headers" no-data-text="no data" :search="criteria">
              <template v-slot:[`item.actions`]="{ item }">
                <v-icon @click="selectPokemon(item)" title="Quick View">mdi-account-eye</v-icon>
                <v-icon title="Full View">mdi-arrow-expand</v-icon>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col v-if="selectedPokemon">
        <!-- <pokemon :pokemon="selectedPokemon"></pokemon> -->
        <div>{{ selectedPokemon.name }}</div>
        <div>{{ selectedPokemon.abilities }}</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script src="./PokemonList.controller.js"></script>

<style>
.actions .v-icon {
  margin-right: 5px;
}
</style>