import { Component, Input } from '@angular/core';
import { Item } from '../models/Item';

@Component({
  selector: 'app-item-desc-horizontal',
  templateUrl: './item-desc-horizontal.component.html',
  styleUrls: ['./item-desc-horizontal.component.scss'],
})
export class ItemDescHorizontalComponent {
  @Input('item') item?: Item;
}
