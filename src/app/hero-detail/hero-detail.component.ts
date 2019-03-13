import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../heroes/Hero';
import { ActivatedRoute } from '@angular/router';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})



export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('url id: ' + id);
    this.heroService.getHero(id).subscribe( hero => this.hero = hero);
  }

}
