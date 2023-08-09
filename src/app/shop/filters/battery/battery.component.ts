import { Component } from '@angular/core';

@Component({
  selector: 'app-battery',
  templateUrl: './battery.component.html',
  styleUrls: ['./battery.component.scss'],
})
export class BatteryComponent {
  selectedOption: string = 'all';

  handleOptionChange(selectedValue: string) {
    this.selectedOption = selectedValue;
  }
}
