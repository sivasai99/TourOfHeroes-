import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // hero: Hero={
     
  //   id:123,
  //   name:'Rajinikath'
    
  // };
  constructor(private heroService: HeroService) { }
  heroes:Hero[];
  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  // getHeroes():void{
  //   this.heroService.getHeroes();
  // }

  // selectedhero:Hero;

  // onSelect(hero:Hero):void
  // {
  //  this.selectedhero=hero;
  // }
  selectedHero:Hero;
  onSelect(hero: Hero): void {
  this.selectedHero = hero;
  }


}
