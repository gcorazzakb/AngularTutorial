import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import {Hero} from './Hero';
import {MessageService} from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})


export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selected: Hero;
  service: HeroService;

  constructor(service: HeroService, private msgService: MessageService) {
    this.service = service;
  }

  ngOnInit() {
    this.service.getHeroes().subscribe(
      heros => {
        this.heroes = heros;
      }
    );
  }

  onClick(hero: Hero) {
    this.msgService.add('Click on Hero: ' + hero.name);
    this.selected = hero;
  }

}
