import { Component, OnInit } from '@angular/core';
import { BiduleService } from '../services/bidule.service';

@Component({
  selector: 'app-plus-loin',
  templateUrl: './plus-loin.component.html',
  styleUrls: ['./plus-loin.component.css']
})
export class PlusLoinComponent implements OnInit {

  memebres =[
    {nom:'Aghiles TAFAT',ville:'Chalons',age:'27'},
    {nom:'Lylia Feza',ville:'Nantes',age:'21'},
    {nom:'Idir TAFAT',ville:'tizi',age:'28'},
    {nom:'Dylan',ville:'Paris',age:'22'},
    {nom:'Nathan Gozlan',ville:'Paris',age:'24'},
    {nom:'Djamel DEBOUZ',ville:'lyon',age:'26'},
  ]
  visible=false;
  constructor(public biduleService:BiduleService) { }
  toDay:any;
  ngOnInit(): void {
    this.toDay =new Date();
  }

  showHide(){
    if(this.visible==true)
    {
      this.visible=false;
    }
    else
    {
      this.visible=true;
    }
  }

}
