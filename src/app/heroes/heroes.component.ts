import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES} from '../mock-heroes';

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
  heroes=HEROES;

  constructor() { }
  ngOnInit() {
  }

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
