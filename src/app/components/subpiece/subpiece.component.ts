import { SubpieceService } from './../../services/subpiece.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subpiece } from 'src/app/models/subpiece';

@Component({
  selector: 'app-subpiece',
  templateUrl: './subpiece.component.html',
  styleUrls: ['./subpiece.component.css']
})
export class SubpieceComponent {

  subpieces: Subpiece[] = [];
  dataLoaded = false;
  filterText="";


  constructor(private subpieceService: SubpieceService,
    private activatedRoute:ActivatedRoute,
     private toastrService:ToastrService) {}

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
}
