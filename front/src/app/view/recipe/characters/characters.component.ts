import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { DataService } from '../../../data.service';
import { RouterModule } from '@angular/router';
import { CharacterService } from '../character/character.service';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
  providers: [HttpClient, CharacterService]
})
export class CharactersComponent {
  characters: any[] = [];
  currentPage = 1;
  nextUrl!: string;
  private dataSubscription!: Subscription;
  private currentSearch: string = '';

  constructor(private characterService: CharacterService, private dataService: DataService) { }

  ngOnInit(): void {
    this.loadCharacters('')
    this.dataSubscription = this.dataService.getData().subscribe(data => {
      this.currentSearch = data;
      this.characters = [];
      this.loadCharacters(this.currentSearch);
    });
  }

  ngOnDestroy(): void {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }

  loadCharacters(text: string) {
    this.characterService.getCharacters(text).subscribe(
      (data: any) => {
        console.log(data)
        this.nextUrl = data._links.next.href
        console.log(this.nextUrl)
        this.characters = [...this.characters, ...data.hits];
      }
    );
  }

  loadNext(text: string){
    this.characterService.getNext(text).subscribe(
      (data: any) => {
        console.log(data)
        this.nextUrl = data._links.next.href
        console.log(this.nextUrl)
        this.characters = [...this.characters, ...data.hits];
      }
    )
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);

    if (windowHeight + scrollPosition >= documentHeight) {
      this.currentPage++;
      this.loadNext(this.nextUrl);
    }
  }
}
