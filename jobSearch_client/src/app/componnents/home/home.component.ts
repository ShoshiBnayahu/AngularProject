import { Component } from '@angular/core';
import { User } from 'src/app/models/User';
import { Field } from 'src/app/models/Field';
import { Router } from "@angular/router"
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  constructor(private router: Router) {

  }

  isConnect: string | null = localStorage.getItem('user')
  currentUser: User | null = this.isConnect ? JSON.parse(this.isConnect) : null

  getField() {
    if (this.currentUser) {
      return Field[this.currentUser.jobSearchField].toLowerCase()
    }
    return '';
  }
  positionOnclick() {
    if (this.currentUser)
      this.router.navigate([`positions/${this.getField()}`])
    else {
      alert('User not logged in! Please login! ')
      this.router.navigate([`/login`])

    }

  }




  //   <p>home works!</p>
  // הקומפוננטה מכילה את הheader וה footer של האתר.
  // למעלה יוצג:
  // header
  // •👤	שם המשתמש המחובר למערכת

  // •🎯	תחום המשרה שהוא מחפש – קישור, בלחיצה עליו יעברו לרשימת המשרות מסוננת לפי תחום זה.
  // אם המשתמש מנסה להיכנס לדף הזה מבלי שביצע לוגין קודם (ה localStorage  ריק) הוא יועבר לדף הלוגין.

  // •👌🏻	כמות הקו"ח שכבר שלח דרך המערכת.
  // •	לוגו של האתר שבלחיצה עליו ינווטו לדף הלוגין.


  // footer
  // 👨🏻‍💼 למטה יוצגו פרטי יצירת קשר עם מנהל האתר.
  // gmail 📧
  // phone 📞





}
