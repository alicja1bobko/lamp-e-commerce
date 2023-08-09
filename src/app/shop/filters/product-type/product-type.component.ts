import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.scss'],
})
export class ProductTypeComponent {
  @Input() options: CheckboxOption[] = [];
  @Output() selectionChanged = new EventEmitter<CheckboxOption[]>();

  checkboxChanged() {
    this.selectionChanged.emit(this.options);
  }
}

export interface CheckboxOption {
  label: string;
  selected: boolean;
}
