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
  currentOrder: Order;
  constructor(private orderService: OrderService) {}
  ngOnInit(): void {
    this.getOrders()
  }

  getOrders() {
    this.orderService.getOrders().subscribe((response) => {
      this.orders = response.data
    });
  }

  setCurrentOrder(order: Order) {
    this.currentOrder = order;
  }

  getCurrentOrderClass(order:Order){
    if(order == this.currentOrder){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
}
