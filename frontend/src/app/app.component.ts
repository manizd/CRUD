import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  products: any=  [];

  constructor() { }

  ngOnInit(): void {
      this.products = [
        {"code": 1,"name": "Bamboo Watch", "category": "Accessory", "quantity": 12},
        {"code": 2,"name": "Black Watch", "category": "Accessory", "quantity": 34},
        {"code": 3,"name": "Blue Band", "category": "Clothing", "quantity": 64},
        {"code": 4,"name": "Blue T-Shirt", "category": "Fitness", "quantity": 6},
        {"code": 5,"name": "Bracelet", "category": "Accessory", "quantity": 25}
      ];
  }

}
