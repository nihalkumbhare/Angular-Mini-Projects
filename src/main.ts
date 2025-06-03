

import { bootstrapApplication } from '@angular/platform-browser';

import { provideStore } from '@ngrx/store';
import { provideState } from '@ngrx/store';
import { AppComponent } from './app/app.component';



// Import your reducer

bootstrapApplication(AppComponent, {
  providers: [
   // Existing router setup
    provideStore(), // Initializes the global store
    
  ]
}).catch(err => console.error(err));

