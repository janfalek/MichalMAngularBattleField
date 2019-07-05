import { Injectable } from '@angular/core';
import { Data } from './data';
import { findLast } from '../../node_modules/@angular/compiler/src/directive_resolver';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  listOfTodos: Data[] = [
    { id: 1, name: 'Clean up' },
    { id: 2, name: 'Learn smart' },
    { id: 3, name: 'Make a ride' },
    { id: 4, name: 'Eat some food' },
    { id: 5, name: 'Listen to good music' },
    { id: 6, name: 'Watch a movie' },
    { id: 7, name: 'Play with children' },
    { id: 8, name: 'Buy a dog' },
    { id: 9, name: 'Go for a run' },
    { id: 10, name: 'Take care' }
  ];
  constructor() { }
   nextid: number = this.listOfTodos.length;

  public AddToDo(newName: string){
        
    this.listOfTodos.push({
      id: this.nextid, name: newName
    });
    this.nextid++;
      console.log(newName);
  }
}
