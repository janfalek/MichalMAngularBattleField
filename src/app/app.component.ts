import { Component } from '@angular/core';
import { Data } from './data';
import { findLast } from '@angular/compiler/src/directive_resolver';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  listOfTodos: Data [];
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
