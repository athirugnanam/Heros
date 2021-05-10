
import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  HEROES: Hero[] =[];
  constructor(
    private HeroService: HeroService
  ) { }

  ngOnInit() {
    this.getHeros();
  }

  getHeros(): void
  {
    this.HeroService.getHeroes().subscribe( heroes => this.HEROES = heroes.slice(1,5));
  }

}
