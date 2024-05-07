import { Component } from '@angular/core'; // Importing necessary modules and dependencies
import { Router } from '@angular/router'; // For routing functionality
import { Field } from 'src/app/models/Field'; // Importing Field model
import { User } from 'src/app/models/User'; // Importing User model
import 'jquery';
import 'bootstrap';

@Component({
  selector: 'app-header', // Component selector
  templateUrl: './header.component.html', // Template URL
  styleUrls: ['./header.component.scss'] // Styles URL
})
export class HeaderComponent { // Component class implementation
  
  constructor(private router: Router) { // Constructor with dependency injection for Router
  }

  isConnect: string | null = localStorage.getItem('user'); // Variable to store user connection status retrieved from local storage
  currentUser: User | null = this.isConnect ? JSON.parse(this.isConnect) : null; // Variable to store current user details, parsed from JSON string
  
  active:string|null=""; // Variable to store active state (not used in provided code)

  getField() { // Method to get user's job search field
    if (this.currentUser) // If current user details exist
      return Field[this.currentUser.jobSearchField].toLowerCase(); // Return user's job search field in lowercase
    return 'positions'; // Return 'positions' if current user details are null
  }
}
