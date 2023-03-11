$(document).ready(function() {
    const baseUrl = "https://pokeapi.co/api/v2/pokemon";
  
    // Fetch data from PokeAPI and create Pokemon cards
    $.get(baseUrl, function(response) {
      const pokemons = response.results;
      const pokedex = $('#pokedex');
  
      pokemons.forEach(function(pokemon) {
        $.get(pokemon.url, function(details) {
          const name = details.name;
          const image = details.sprites.front_default;
          const type = details.types[0].type.name;
          const card = createPokemonCard(name, image, type);
          pokedex.append(card);
        });
      });
    });
  
    // Helper function to create Pokemon card
    function createPokemonCard(name, image, type) {
      const card = $('<div>').addClass('pokemon-card');
      const img = $('<img>').attr('src', image);
      const h2 = $('<h2>').text(name);
      const p = $('<p>').text(`Type: ${type}`);
      card.append(img, h2, p);
      return card;
    }
  });
  