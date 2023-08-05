import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  
  productAddForm: FormGroup;
  productSubpieceAddForm: FormGroup;
  subpieceId:number[]=[];
 
  constructor(private formBuilder: FormBuilder,
    private productService: ProductService,
    private toastrService: ToastrService){}
  
  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm(){
    this.productAddForm = this.formBuilder.group({
      name:["",Validators.required],
      modelNumber:["",Validators.required],
      type:["",Validators.required],
    })
    this.productSubpieceAddForm = this.formBuilder.group({
      subpieceId1:["",Validators.required],
      subpieceId2:["",Validators.required],
      subpieceId3:["",Validators.required],
      subpieceId4:["",Validators.required],
      subpieceId5:["",Validators.required]
    })
  }

  add(){
    if(this.productAddForm.valid){
      let productModel = Object.assign({},this.productAddForm.value);
      let subpiceModel = Object.assign({},this.productSubpieceAddForm.value);
      this.subpieceId.push(
        subpiceModel.subpieceId1,
        subpiceModel.subpieceId2,
        subpiceModel.subpieceId3,
        subpiceModel.subpieceId4,
        subpiceModel.subpieceId5
        )
      this.productService.add(productModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı")
        this.productService.addSubpieces(this.subpieceId).subscribe(response=>{
          this.toastrService.success(response.message,"Başarılı")
        })
      },responseError=>{
        this.toastrService.error(responseError.error);
      })
      
    }else{
      this.toastrService.error("Eksik bilgi","Dikkat")
    }
    
    
  }

}
