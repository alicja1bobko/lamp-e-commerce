import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],

      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  shippingMethod: string = '';
  paymentMethod: string = '';

  submitForm() {
    const orderData = {
      contact: this.contactForm,
      shippingMethod: this.shippingMethod,
      paymentMethod: this.paymentMethod,
    };
    console.log('Submitted Order:', orderData);
  }
}
