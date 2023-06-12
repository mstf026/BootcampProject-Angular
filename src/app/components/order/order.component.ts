import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  orders: Order[] = [];
  dataLoaded = false;
  constructor(private orderService: OrderService) {}
  ngOnInit(): void {
    this.getOrders()
  }

  getOrders() {
    this.orderService.getOrders().subscribe((response) => {
      this.orders = response.data;
      this.dataLoaded = true;
    });
  }

}
