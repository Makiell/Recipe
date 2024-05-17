import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { CommonModule } from '@angular/common';


import { CharacterService } from '../character/character.service';


@Component({
  selector: 'app-characterdetail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './characterdetail.component.html',
  styleUrl: './characterdetail.component.css',
  providers: [HttpClient, CharacterService, CharacterService]
})
export class CharacterdetailComponent {
  characterName!: string;
  character!: any;
  data!: string;
  constructor(private route: ActivatedRoute, private characterService: CharacterService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.characterName = params.get('name') ?? '';
      // console.log(this.planetName)
    });
    this.characterService.getCharacter(this.characterName).subscribe((data) => {
      this.character = data.recipe
      console.log(this.character)
      // console.log(this.planet.films)
    })

  }


}
