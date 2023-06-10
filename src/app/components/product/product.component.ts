import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  dataLoaded = false;
  filterText="";


  constructor(private productService: ProductService,
    private activatedRoute:ActivatedRoute, private toastrService:ToastrService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
        this.getProductById(params["id"])
      }
      else{
        this.getProducts()
      }
    })
  }

  getProducts() {
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true;
    })
  }

  getProductById(id:number) {
    this.productService.getProductById(id).subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true;
    })
  }

  addToCart(product:Product){
    this.toastrService.success("Sepete eklendi",product.name)
  }
}
