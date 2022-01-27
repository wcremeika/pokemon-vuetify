import alertsService from "../modules/alerts/alerts.service";
import pokemonService from "./../modules/pokemon/pokemon.service";

export default {
    name: "PokemonDetail",
    async beforeRouteEnter(to, from, next) {
        try {
            const id = to.params.id;
            const pokemon = await pokemonService.fetchPokemon(id);
            next((vm) => (vm.pokemon = pokemon));
        }
        catch (error) {
            alertsService.addAlert({ type: "error", text: "Pokemon DNE" });
            next("/");
        }
    },
    data: () => ({
        pokemon: null,
    })
};