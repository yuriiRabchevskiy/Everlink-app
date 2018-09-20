import { Component } from '@angular/core';

@Component({
  selector: 'app-game-machine',
  templateUrl: './game-machine.component.html',
  styleUrls: ['./game-machine.component.css']
})
export class GameMachineComponent {
  money = 0;
  price = 0;
  nominal = [100, 50, 25, 10, 5, 1];
  arr: number[] = [];
  constructor() {
  }

  getChange(money, price) {
    this.arr = [];
    if (money < price) { return; }
    const m = money * 100;
    const p = price * 100;
    const differ = m - p;
    this.arr = this.generateArray(differ).reverse();
  }

  generateArray(differ) {
    const coins = [];
    let count = 0;
    this.nominal.forEach(it => {
      count = 0;
      while (differ >= it) {
        count++;
        differ = differ - it;
      }
      coins.push(count);
    });
    return coins;
  }

}
