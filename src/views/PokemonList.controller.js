import alertsService from "./../modules/alerts/alerts.service";
import pokemonService from "./../modules/pokemon/pokemon.service";

const PokemonController = {
    async init() {
        const response = await pokemonService.search({ type: "pokemon", limit: 1500 });
        const pokemonList = response.results.sort((p1, p2) => p1.name > p2.name ? 1 : -1)
        this.data = pokemonList;
    },
    data: [],
    headers: [{
            text: "Name",
            value: "name",
            sortable: true
        },
        {
            text: "Actions",
            value: "actions",
            sortable: false,
            cellClass: "actions"
        }
    ],
    criteria: "",
    selectedPokemon: null,
    async search() {
        try {
            const results = await pokemonService.search({
                type: "pokemon",
                limit: 1500
            });
            this.data = results;
        }
        catch (error) {
            console.error(error);
            alertsService.addAlert({
                type: "error",
                text: "Search: Something went wrong"
            })
        }
    },
    async selectPokemon(pokemon) {
        try {
            this.selectedPokemon = await pokemonService.fetchPokemon(pokemon.name);
        }
        catch (error) {
            alertsService.addAlert({ type: "error", text: "Unable to fetch data" });
        }
    }
};

export default {
    name: "PokemonList",
    data: () => PokemonController,
    async created() {
        await PokemonController.init();
    }
}