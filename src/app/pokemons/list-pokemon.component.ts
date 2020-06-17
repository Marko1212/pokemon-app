import { Component } from "@angular/core";
import { Pokemon } from "./pokemon";
import { Router } from "@angular/router";
import { PokemonsService } from "./pokemons.service";

@Component({
  selector: "list-pokemon",
  templateUrl: `./app/pokemons/list-pokemon.component.html`,
})
export class ListPokemonComponent {
  pokemons: Pokemon[] = null;

  constructor(
    private router: Router,
    private pokemonsService: PokemonsService
  ) {}

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonsService
      .getPokemons()
      .subscribe((pokemons) => (this.pokemons = pokemons));
  }

  selectPokemon(pokemon: Pokemon) {
    console.log("Vous avez sélectionné " + pokemon.name);
    let link = ["/pokemon", pokemon.id];
    this.router.navigate(link);
  }
}
