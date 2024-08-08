import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signout-redirect-callback',
  standalone: true,
  imports: [],
  templateUrl: './signout-redirect-callback.component.html',
  styleUrl: './signout-redirect-callback.component.css'
})
export class SignoutRedirectCallbackComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {

  }

  ngOnInit() {
   sessionStorage.clear();
   localStorage.clear();
    this.router.navigate(['/view-students']);
  }

}
