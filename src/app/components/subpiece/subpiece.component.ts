import { SubpieceService } from './../../services/subpiece.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subpiece } from 'src/app/models/subpiece';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-subpiece',
  templateUrl: './subpiece.component.html',
  styleUrls: ['./subpiece.component.css']
})
export class SubpieceComponent implements OnInit{

  subpieces: Subpiece[] = [];
  dataLoaded = false;
  filterText="";


  constructor(private subpieceService: SubpieceService,
    private activatedRoute:ActivatedRoute,
     private toastrService:ToastrService,
     private authService:AuthService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
        this.getSubpieceById(params["id"])
      }
      else{
        this.getSubpieces()
      }
    })
  }

  getSubpieces() {
    this.subpieceService.getSubpieces().subscribe((response) => {
      this.subpieces = response.data;
      this.dataLoaded = true;
    })
  }

  getSubpieceById(id:number) {
    this.subpieceService.getSubpieceById(id).subscribe((response) => {
      this.subpieces = response.data;
      this.dataLoaded = true;
    })
  }

  deleteSubpiece(subpiece: Subpiece){
    this.subpieceService.delete(subpiece).subscribe(response=>{
      this.toastrService.success(response.message,"Başarılı")
    },responseError=>{
      this.toastrService.error(responseError.error);
    })
  }

  
  isAuthenticated(){
    if(this.authService.isAuthenticated()){
      return true;
    }
    else{
      return false;
    }
  }
}
