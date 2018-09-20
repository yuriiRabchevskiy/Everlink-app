import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages: string[] = ['card', 'machine'];
  selectedPage: string;
  constructor() {
  }

  selectPage(page: string) {
    this.selectedPage = page;
  }
}
