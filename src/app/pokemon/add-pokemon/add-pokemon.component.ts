// import { PokemonFormComponent } from './../pokemon-form/pokemon-form.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon.models';

@Component({
  selector: 'app-add-pokemon',
  templateUrl:  './add-pokemon.component.html',
})
export class AddPokemonComponent {
  newPokemon: Pokemon = { id: 0, name: '', types: [], hp: 0, cp: 0, picture: '', created: new Date() };


  constructor(private pokemonService: PokemonService, private router: Router) {}

  onSubmit(pokemon: Pokemon) {
    this.pokemonService.addPokemon(pokemon).subscribe({
      next: (response) => {
        this.router.navigate(['/pokemons']);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}