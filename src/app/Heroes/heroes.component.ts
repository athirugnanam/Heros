
import { HeroService } from './../hero.service';
import { Hero } from '../hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes : Array<Hero>= [];

  constructor(
    private HeroService: HeroService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

    getHeroes(): void{
      this.HeroService.getHeroes().subscribe(heroes => this.heroes= heroes);
    }

    add(name: string): void {
      name = name.trim();
      if (!name) { return; }
      this.HeroService.addHero({ name} as Hero)
        .subscribe(hero => {
          this.heroes.push(hero);
        });
    }

    delete(hero:Hero): void {
      this.heroes = this.heroes.filter(h => h !== hero);
      this.HeroService.deleteHero(hero.id).subscribe();
    }

}
