import { Component } from '@angular/core';
import { loginService } from 'src/app/services/login.service';
import { Router } from "@angular/router"
import { Field } from 'src/app/models/Field';

// LoginComponent class representing the login component
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // Constructor to inject dependencies
  constructor(private loginSVC: loginService, private router: Router) {}

  // userData object to hold username and password
  userData: any = { username: '', password: '' }

  // Function triggered when the login button is clicked
  loginClick() {
    // Call the getUserFromServer method of loginService
    this.loginSVC.getUserFromServer(this.userData.username, this.userData.password).subscribe((res: any) => {
      // If user exists in the response
      if (res != null) {
        res.password = 'secret';
        localStorage.setItem('user', JSON.stringify(res));
        // Alert with a welcome message
        alert(`Welcome ${this.userData.username}!`);
        // Navigate to the appropriate route based on the user's job search field
        this.router.navigate([`positions/${Field[res.jobSearchField].toLowerCase()}`])
      }
      // If user does not exist
      else {
        localStorage.setItem('user', '');
        // Alert with a user not exist message
        alert("User does not exist ☹️ !")
      }
    });
  }
}
