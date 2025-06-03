import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, computed, OnInit, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

import { MaterialModule } from './material.module';

import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { QuoteComponent } from './quote/quote.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    QuoteComponent,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
    MatDialogModule,
    MatMenuModule,
    MatTableModule,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [],
  // preserveWhitespaces: true,
})
export class AppComponent implements OnInit {
  title: any;

  constructor() {}

  ngOnInit() {}
}
