import { Component } from '@angular/core';

@Component({
  selector: 'app-game-cards',
  templateUrl: './game-cards.component.html',
  styleUrls: ['./game-cards.component.css']
})
export class GameCardsComponent {
  decks: string[] = ['2S', '2C', '2D', '2H', '3S', '3C', '3D', '3H', '4S', '4C', '4D', '4H',
    '5S', '5C', '5D', '5H', '6S', '6C', '6D', '6H', '7S', '7C', '7D', '7H',
    '8S', '8C', '8D', '8H', '9S', '9C', '9D', '9H', 'TS', 'TC', 'TD', 'TH',
    'JS', 'JC', 'JD', 'JH', 'QS', 'QC', 'QD', 'QH', 'KS', 'KC', 'KD', 'KH', 'AS', 'AC', 'AD', 'AH'];

  decksCount = 0;

  data: any[] = [];

  constructor() {
  }

  addCard(card) {
    this.data.push(card);
    this.getCardItems(this.data);
  }

  getCardItems(data: Array<string>) {
    // first step we must check array length
    if (data.length < 52) {
      this.decksCount = 0;
      return;
    }
    // secont step we sort cards
    const cards = this.sortCards(data);
    // find min count full decks
    this.decksCount = this.findFullDecksCount(cards);
  }

  sortCards(items) {
    const box = {};
    this.decks.forEach(it => box[it] = 0);
    items.forEach(it => box[it] = box[it] + 1);
    return box;
  }

  findFullDecksCount(data) {
    const array = Object.keys(data).map(key => data[key]);
    return Math.min.apply(null, array);
  }
}
