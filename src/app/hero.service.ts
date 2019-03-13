import { Injectable } from '@angular/core';
import {HEROES} from './heroes/mock-heros';
import {Hero} from './heroes/Hero';
import { Observable, of } from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('Get Heros');
    return of(HEROES);
  }

}
