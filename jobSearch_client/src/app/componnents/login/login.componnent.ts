import { Component } from '@angular/core';
import { loginService } from 'src/app/services/login.service';
import { __await } from 'tslib';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private loginSVC: loginService) {

  }
  userData: any = { username: '', password: '' }
  loginClick() {
    this.loginSVC.getUserFromServer(this.userData.username, this.userData.password).subscribe((res: any) => {
      if (res != null) {
        localStorage.setItem('user', JSON.stringify(res));
        alert(` ברוך הבא ${this.userData.username}!`);
        ///////link to positin
      }
      else {
        localStorage.setItem('user', '');
        alert("שם משתמש או סיסמה שגויים")

      }
    }
    );


  }
}





