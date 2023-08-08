import { Component, Input } from '@angular/core';
import { Item } from '../models/Item';

@Component({
  selector: 'app-item-desc',
  templateUrl: './item-desc.component.html',
  styleUrls: ['./item-desc.component.scss'],
})
export class ItemDescComponent {
  @Input('item') item?: Item;
}
