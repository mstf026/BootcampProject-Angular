import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SubpieceService } from 'src/app/services/subpiece.service';

@Component({
  selector: 'app-subpiece-add',
  templateUrl: './subpiece-add.component.html',
  styleUrls: ['./subpiece-add.component.css']
})
export class SubpieceAddComponent implements OnInit{


  subpieceAddForm:FormGroup;

  constructor(private formBuilder:FormBuilder, 
    private subpieceService:SubpieceService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createSubpieceAddForm();
  }

  createSubpieceAddForm(){
      this.subpieceAddForm = this.formBuilder.group({
        name:["",[Validators.required]],
        unitsInStock:["",Validators.required,Validators.min(0)],
        cost:["",[Validators.required,Validators.min(0)]],
        uniqueNumber:["",[Validators.required,Validators.min(0)]],
        stationId:["",[Validators.required,Validators.min(0)]]
      })
  }

  addSubpiece(){
   this.subpieceService.add(this.subpieceAddForm.value).subscribe(response=>{
    this.toastrService.success("Alt parça eklendi",this.subpieceAddForm.value["name"]);
   });
   
  }
}
