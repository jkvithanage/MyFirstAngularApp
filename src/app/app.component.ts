import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  customerForm = new FormGroup({
    id: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(45)]),
    address: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(45)]),
    salary: new FormControl(null, [Validators.required])
  });

  submitData(){
    console.log(this.customerForm);
  }
}
