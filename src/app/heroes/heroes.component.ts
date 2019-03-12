import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import {Hero} from './Hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})


export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selected: Hero;
  service: HeroService;


  constructor(service: HeroService) {
    this.service = service;
  }



  ngOnInit() {
    this.service.getHeroes().subscribe(heroes => this.heroes = heroes);;
  }

  onClick(hero: Hero) {
    this.selected = hero;
  }

}
