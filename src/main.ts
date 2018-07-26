import { enableProdMode, Component, OnInit } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

  @Component({
    selector: 'todo-app',
    template: 'My Todo List',

  })

  export class TodoApp implements OnInit {
    constructor(){}
    ngOnInit (){}
  }