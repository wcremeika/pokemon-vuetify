import axios from "axios";

export default {
    async fetchPokemon(id) {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return response.data;
    },
    async search({ type, limit = 20, offset = 20 }) {
        if (!type) {
            throw new Error("Search: type parameter is undefined");
        }
        const response = await axios.get(`https://pokeapi.co/api/v2/${type}`, {
            params: {
                limit,
                offset
            }
        });

        return response.data;
    }
};