import { Component } from '@angular/core';

@Component({
  selector: 'test-cjs-new-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sideNavOpen = false;
  title = 'test-cjs-new';

  sideNavToggle(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }
}
