import { HeroService } from './../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Hero} from '../hero';
import { Location } from '@angular/common'

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  hero!: Hero;

  constructor(
    private route: ActivatedRoute,
    private HeroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {

    let id = this.route.snapshot.paramMap.get('id');
    if (id != null)
    {
      let id1 = parseInt(id, 10);
      this.HeroService.getHero(id1).subscribe(hero => this.hero = hero);
    }

  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.HeroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

}
