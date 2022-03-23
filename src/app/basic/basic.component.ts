import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { BiduleService } from '../services/bidule.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']

})
export class BasicComponent implements OnInit {

  name ='tafat';
  info:any;
  debut: any;

  
  constructor(private biduleService: BiduleService,private autheSercive:AuthService,private route:Router) { }

  ngOnInit(): void {
    if(!this.autheSercive.isConnected())
    {
      this.route.navigateByUrl('login ');
    }
    this.biduleService.test += 'dans le compennat Basic'
    this.debut=this.biduleService.test;
  }



  changeName(){
    this.name='tafat';
  }
  recup(val:any)
  {
    this.info = val;

}
}
