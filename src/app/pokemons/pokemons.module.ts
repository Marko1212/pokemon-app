import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { PokemonsRoutingModule } from "./pokemons-routing.module";

import { BorderCardDirective } from "./border-card.directive";
import { PokemonTypeColorPipe } from "./pokemon-type-color.pipe";
import { PokemonsService } from "./pokemons.service";

import { ListPokemonComponent } from "./list-pokemon.component";
import { DetailPokemonComponent } from "./detail-pokemon.component";
import { EditPokemonComponent } from "./edit-pokemon.component";
import { PokemonFormComponent } from "./pokemon-form.component";
import { PokemonSearchComponent } from "./search-pokemon.component";
import { LoaderComponent } from "../loader.component";

import { AuthGuard } from "../auth-guard.service";

@NgModule({
  imports: [CommonModule, FormsModule, PokemonsRoutingModule],
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    PokemonFormComponent,
    EditPokemonComponent,
    PokemonSearchComponent,
    LoaderComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
  ],
  providers: [PokemonsService, AuthGuard],
})
export class PokemonsModule {}
