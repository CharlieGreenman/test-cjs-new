import { Component } from '@angular/core';
import { AuthService } from "@test-cjs-new/common/common-services";

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

  constructor(private authService: AuthService) {
  }

  logIn() {
    this.authService.loginWithRedirect()
  }

  signUp() {
    this.authService.signUpWithRedirect();
  }
}
