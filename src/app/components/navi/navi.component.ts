import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
})
export class NaviComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {}

  redirectToHome(): void {
    this.document.location.href = 'http://localhost:4200';
  }

  redirectToManufacture(): void {
    this.document.location.href = 'http://localhost:4200/manufactures';
  }

  redirectToAddProduct(): void {
    this.document.location.href = 'http://localhost:4200/products/add';
  }

  redirectToGetOrders(): void {
    this.document.location.href = 'http://localhost:4200/orders/';
  }

  redirectToGetDepartments(): void {
    this.document.location.href = 'http://localhost:4200/departments/';
  }

  redirectToGetSubpieces(): void {
    this.document.location.href = 'http://localhost:4200/subpieces/';
  }
}
