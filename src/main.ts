import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { functions } from 'lodash';
import { count } from 'rxjs';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  ///4.	Підрахунок кількості слів у реченні.

  let value: string;
  value = "Hello world";
  function getSubString(){
  
  }
  alert(value)