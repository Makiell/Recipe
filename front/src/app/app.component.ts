import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, ViewportScroller } from '@angular/common';
import { LoginComponent } from "./view/forum/login/login.component";
import { AuthAPIServiceService } from './data/network/auth/service/auth-apiservice.service';
import { CatalogComponent } from './view/recipe/catalog/catalog.component';
import { HomeComponent } from './view/recipe/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CatalogComponent, HttpClientModule, CommonModule, RouterModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'StarWars';
  isLoggedIn: boolean = true ;

  constructor(private viewportScroller: ViewportScroller, private auth: AuthAPIServiceService) { }

  ngOnInit() {
    this.auth.isLoggedIn.subscribe((data)=>{
      this.isLoggedIn = data
    })
  }

  scrollDown(): void {
    this.viewportScroller.scrollToAnchor('result');
  }

  logout() {
    this.auth.logout()
  }
}
