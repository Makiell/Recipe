import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent  {
  _text: string = '';

  constructor(private data: DataService){}

  set text(value: string) {
    this._text = value;
    this.data.setData(value);
  }
}
