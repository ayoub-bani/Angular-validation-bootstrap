import { Component } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-login';
  form = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
  });

  get firstname() {
    return this.form.get('firstName');
  };
  get lastname() {
    return this.form.get('lastName');
  }
}
