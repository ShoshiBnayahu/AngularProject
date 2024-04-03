import { Component } from '@angular/core';
import { loginService } from 'src/app/services/login.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private loginSVC: loginService, private router: Router) {

  }
  userData: any = { username: '', password: '' }
  loginClick() {
    this.loginSVC.getUserFromServer(this.userData.username, this.userData.password).subscribe((res: any) => {
      if (res != null) {
        res.password='secret';
        localStorage.setItem('user', JSON.stringify(res));
        alert(` ברוך הבא ${this.userData.username}!`);
        this.router.navigate([`positions/${res.field}`])
      }
      else {
        localStorage.setItem('user', '');
        alert("user not exist ☹️ !")
      }
    }
    );
  }
}





