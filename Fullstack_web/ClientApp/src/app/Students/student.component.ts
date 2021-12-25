import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html'
})

export class StudentComponent {
  customers = []
  id;
  name;
  age;
  gender;
  address;
  Add_data() {
    this.customers.push({ id: this.id, name: this.name, age: this.age, gender: this.gender, address: this.address })
    console.log(this.customers);
  }

}
