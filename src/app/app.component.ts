import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userInput = '';
  randomText = lorem.sentence();
  compare = false;

  onInput(event: Event) {
    this.userInput = (event.target as HTMLInputElement).value;
    if (this.userInput === this.randomText) {
      this.compare = true;
    }
  }
}
