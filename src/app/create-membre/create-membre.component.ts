import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewUserComponent } from '../new-user/new-user.component';

@Component({
  selector: 'app-create-membre',
  templateUrl: './create-membre.component.html',
  styleUrls: ['./create-membre.component.css']
})
export class CreateMembreComponent implements OnInit {

    user = {nom:'Aghiles TAFAT',ville:'Chalons',age:'27'};
  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  createMembre(val:any)
  {
    console.log(val);
  }
  createNewMembre()
  {
    console.log(this.user);
  }

  openNewUserModal()
  {
    const dialogRef  = this.dialog.open(NewUserComponent);
    

}

}
