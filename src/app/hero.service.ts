import { Injectable } from '@angular/core';
import {HEROES} from './heroes/mock-heros';
import {Hero} from './heroes/Hero';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

}
