import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

// routes
import { APP_ROUTING } from "./app.routes";

// services

// components
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchComponent } from './components/search/search.component';
import { HeroeCardComponent } from './components/heroe-card/heroe-card.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, AboutComponent, HeroesComponent, HeroeComponent, SearchComponent, HeroeCardComponent],
  imports: [BrowserModule, FormsModule, APP_ROUTING],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
