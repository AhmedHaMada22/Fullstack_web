import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  myname = "HaMada variable";
  mozaz = ["Nour", "Eman", "Hadir", "Mai", "Doaa"]
  myfriends = [
    {id:"1254",name:"Ahmed",age:19,gender:"male"},
    { id: "2586", name: "Nour", age: 22, gender: "female"},
    { id: "8467", name: "Amira", age:32, gender: "female"}  ]

  changeTitle() {
    this.myname = "I love Egypt";
  }

}
