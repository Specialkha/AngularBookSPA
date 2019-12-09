import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyAXdR-Q6N21p3Xjzb4AazZtWv4N4zF5rtA",
      authDomain: "bookshelves-72278.firebaseapp.com",
      databaseURL: "https://bookshelves-72278.firebaseio.com",
      projectId: "bookshelves-72278",
      storageBucket: "bookshelves-72278.appspot.com",
      messagingSenderId: "462139031874",
      appId: "1:462139031874:web:5ce1cf4a57be07edc388db"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
  }
}
