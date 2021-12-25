import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }
  myfriends = [
    { id: "1254", name: "Ahmed", age: 19, gender: "male" , colors:["Red","Green"]},
    { id: "2586", name: "Nour", age: 22, gender: "female", colors: ["Yyellow", "Orange"]},
    { id: "8467", name: "Amira", age: 32, gender: "female", colors: ["Blue", "Brown"] }]
  //----------------------------------------------------------------------------------------
  phone = "";
  phones = [];
  AddMobile() {
    this.phones.push(this.phone);
    console.log(this.phones)
  }

}
