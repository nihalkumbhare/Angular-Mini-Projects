import { Component } from '@angular/core';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.css'
})
export class QuoteComponent {

  quotes:string[] = [

    "Believe in yourself.",
    "Push your limits.",
    "Stay focused and never give up.",
    "Your only limit is your mind.",
    "Dream. Plan. Do."
  ];

  currentQuote: string = this.quotes[0];

  showRandomQuote(){
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    this.currentQuote = this.quotes[randomIndex];
  }
}
