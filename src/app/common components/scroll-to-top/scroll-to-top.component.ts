import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss'],
})
export class ScrollToTopComponent {
  // Show the arrow when the user scrolls down
  @HostListener('window:scroll', [])
  onScroll() {
    this.showScrollArrow = window.scrollY > 300;
  }

  showScrollArrow = false;

  // Scroll to the top
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
