import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  contactForm!: FormGroup;
  shippingMethod: string = 'inpost';
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      country: ['', [Validators.required]],
      postalCode: ['', [Validators.required, Validators.minLength(5)]],
      street: ['', [Validators.required, Validators.minLength(5)]],
      note: ['', [Validators.minLength(3)]],
      shippingMethod: ['', [Validators.required]],
      payment: ['', [Validators.required]],
    });
  }

  submitForm() {
    const orderData = {
      contact: this.contactForm,
    };
    this.contactForm.reset();
    console.log('Submitted Order:', orderData);
  }

  onShippingMethodChange(event: Event) {
    const selectedShippingMethod = (event.target as HTMLInputElement).value;
    this.shippingMethod = selectedShippingMethod;
    console.log(this.shippingMethod);
  }
}
