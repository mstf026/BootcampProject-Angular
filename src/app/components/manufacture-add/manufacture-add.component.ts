import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ManufactureService } from 'src/app/services/manufacture.service';

@Component({
  selector: 'app-manufacture-add',
  templateUrl: './manufacture-add.component.html',
  styleUrls: ['./manufacture-add.component.css']
})
export class ManufactureAddComponent implements OnInit{
  
  manufactureAddForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private manufactureService: ManufactureService,
    private toastrService: ToastrService){}
  ngOnInit(): void {
    this.createManufactureAddForm();
  }


  createManufactureAddForm(){
    this.manufactureAddForm = this.formBuilder.group({
      id:["",Validators.required]
    })
  }

  manufactureStationA(){
    if(this.manufactureAddForm.valid){
      let manufactureModel = Object.assign({},this.manufactureAddForm.value);
      this.manufactureService.addSubpieceToStationA(manufactureModel.id).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı")
      },responseError=>{
        this.toastrService.error("Yetersiz Stok");
      })
    }else{
      this.toastrService.error("Eksik bilgi","Dikkat")
    }
  }

  manufactureStationB(){
    if(this.manufactureAddForm.valid){
      let manufactureModel = Object.assign({},this.manufactureAddForm.value);
      this.manufactureService.addSubpieceToStationB(manufactureModel.id).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı")
      },responseError=>{
        this.toastrService.error("Yetersiz Stok");
      })
    }else{
      this.toastrService.error("Eksik bilgi","Dikkat")
    }
  }

  manufactureStationC(){
    if(this.manufactureAddForm.valid){
      let manufactureModel = Object.assign({},this.manufactureAddForm.value);
      this.manufactureService.addSubpieceToStationC(manufactureModel.id).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı")
      },responseError=>{
        this.toastrService.error("Yetersiz Stok");
      })
    }else{
      this.toastrService.error("Eksik bilgi","Dikkat")
    }
  }

  manufactureStationD(){
    if(this.manufactureAddForm.valid){
      let manufactureModel = Object.assign({},this.manufactureAddForm.value);
      this.manufactureService.addSubpieceToStationD(manufactureModel.id).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı")
      },responseError=>{
        this.toastrService.error("Yetersiz Stok");
      })
    }else{
      this.toastrService.error("Eksik bilgi","Dikkat")
    }
  }

  manufactureStationE(){
    if(this.manufactureAddForm.valid){
      let manufactureModel = Object.assign({},this.manufactureAddForm.value);
      this.manufactureService.addSubpieceToStationE(manufactureModel.id).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı")
      },responseError=>{
        this.toastrService.error("Yetersiz Stok");
      })
    }else{
      this.toastrService.error("Eksik bilgi","Dikkat")
    }
  }
}
