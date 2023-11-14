    new Vue({
        el: '#app',
        data: {
            pokemonList: [],
            selectedPokemonId: null,
            selectedPokemonDetails: null
        },
        mounted() {
            this.fetchPokemonList();
        },
        methods: {
            async fetchPokemonList() {
                try {
                    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
                    const data = await response.json();
                    this.pokemonList = data.results.map((pokemon, index) => ({
                        id: index + 1,
                        name: pokemon.name,
                    }));
                } catch (error) {
                    console.error('Error fetching Pokemon list:', error);
                }
            },
            async getPokemonDetails(pokemonId) {
                try {
                    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
                    const data = await response.json();
                    this.selectedPokemonDetails = `Height: ${data.height} | Weight: ${data.weight}`;
                    this.selectedPokemonId = pokemonId;
                } catch (error) {
                    console.error(`Error fetching details for Pokemon ${pokemonId}:`, error);
                }
            }
        }
    });
