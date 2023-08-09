import { Component } from '@angular/core';
import { CheckboxOption } from './product-type/product-type.component';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  checkboxOptions: CheckboxOption[] = [
    { label: 'pendant', selected: true },
    { label: 'portable table lamp', selected: true },
    { label: 'recessed lighs', selected: false },
    { label: 'surface', selected: false },
    { label: 'wall', selected: false },
    { label: 'floor', selected: false },
  ];

  handleSelectionChange(selectedOptions: CheckboxOption[]) {
    console.log('Selected options:', selectedOptions);
  }
}
