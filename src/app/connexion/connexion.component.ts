import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  msgErr:any;
  constructor(private route:Router, private autheSercive:AuthService) { }

  ngOnInit(): void {
    if(this.autheSercive.isConnected())
    {
      this.route.navigateByUrl('basic');
    }
  }

  connexion(val:any)
  {
    //post (login et mot de pass) et qui renverra un user complet ou null si identifient ou mot de passe inccorect
    if(val.login === 'azerty@ordi.fr' && val.password==='azerty')
    {
      this.autheSercive.setUserSession(val)
       this.route.navigateByUrl('basic');
    }
    else{
      this.msgErr =" Identifient ou mot de passe incorrect"
    }
  }
}
