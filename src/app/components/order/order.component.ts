import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
  constructor(private orderService: OrderService,
    private toastrService: ToastrService) {}
  ngOnInit(): void {
    this.getOrders()
  }

  getOrders() {
    this.orderService.getOrders().subscribe((response) => {
      this.orders = response.data;
      this.dataLoaded = true;
    });
  }

  deleteOrder(order: Order){
    this.orderService.delete(order).subscribe(response=>{
      this.toastrService.success(response.message,"Başarılı")
    },responseError=>{
      this.toastrService.error(responseError.error);
    })
  }
}
