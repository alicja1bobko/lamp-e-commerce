import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { ApiService } from '../api.service';
import { Item } from '../home/models/Item';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent {
  selectedItem: Item | undefined;
  paramsSub: Subscription | null = null;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {
    this.paramsSub = this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.apiService.getItemById(id).subscribe((item) => {
          this.selectedItem = item;
        });
      }
    });
  }

  ngOnDestroy(): void {
    if (this.paramsSub) {
      this.paramsSub.unsubscribe();
    }
  }
}
