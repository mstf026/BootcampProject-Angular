import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.css']
})
export class OrderAddComponent implements OnInit{

  orderAddForm:FormGroup;

  constructor(private formBuilder:FormBuilder, 
    private orderService:OrderService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createOrderAddForm();
  }

  createOrderAddForm(){
      this.orderAddForm = this.formBuilder.group({
        id:["",[Validators.required]],
        modelNumber:["",Validators.required,Validators.maxLength(3)],
        quantity:["",[Validators.required,Validators.min(0)]],
        productId:["",[Validators.required,Validators.min(0)]]
      })
  }

  addOrder(){
   this.orderService.add(this.orderAddForm.value).subscribe(response=>{
    this.toastrService.success("Sipariş eklendi",this.orderAddForm.value["productId"]);
   });
   
  }
}
