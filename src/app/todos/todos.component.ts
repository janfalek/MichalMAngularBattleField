import { Component, OnInit, Input, NgModule, Output } from '@angular/core';
import { Data } from '../data';
import { ToDoService } from '../to-do.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
  
  @Output() exitData = new EventEmitter();
  @Input() todos: Data[];

  
  

}
