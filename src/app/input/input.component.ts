import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Data } from '../data';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
    public data: Data = new Data();
  
    @Output() public addToDo: EventEmitter<string> = new EventEmitter();
  runAddToDo(): void {
    this.addToDo.emit(this.data.name);}
  constructor() {}
  ngOnInit() {
  }

}

