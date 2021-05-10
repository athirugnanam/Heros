import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'George Washington' },
      { id: 12, name: 'John Adams' },
      { id: 13, name: 'Andrew Jackson' },
      { id: 14, name: 'Willam Henry Harrison' },
      { id: 15, name: 'Abraham Lincoln' },
      { id: 16, name: 'John F. Kennedy' },
      { id: 17, name: 'George W.Bush' },
      { id: 18, name: 'Willam J. Clinton' },
      { id: 19, name: 'Barack Obama' },
      { id: 20, name: 'Joseph R. Biden Jr' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
