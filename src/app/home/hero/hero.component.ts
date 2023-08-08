import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  isLamp1Visible = true;
  isLamp2Visible = true;
  isSectionFirstHovered = false;
  isSectionThirdHovered = false;

  toggleLamp1Visibility() {
    this.isLamp1Visible = !this.isLamp1Visible;
  }

  toggleLamp2Visibility() {
    this.isLamp2Visible = !this.isLamp2Visible;
  }
}
