import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private cookieService: CookieService, private router: Router) {}

  logout() {
    this.cookieService.delete('isAuthenticated');
    this.router.navigate(['/login']);

  }
}
