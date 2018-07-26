import { Component, OnInit, Input, NgModule } from '@angular/core';
import { Data } from '../data';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
@Input() todos: Data[];
  constructor() { }

  ngOnInit() {
  }

}
