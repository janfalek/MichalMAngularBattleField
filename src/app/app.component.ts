import { Component } from '@angular/core';
import { Data } from './data';
import { findLast } from '@angular/compiler/src/directive_resolver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
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
  nextId: number=11;
  dupaDupa(newToDoName: string){
    console.log(newToDoName);
    this.listOfTodos.push({
      id: this.nextId, name: newToDoName
    });
    this.nextId++;
  };
  title = 'My Todo List';
}
