import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sentry Angular';
  errorStatus = '';

  ThrowError() {
    console.log('creating error');
    this.errorStatus = ' Good job creating an error';
    document.getElementById('nonExistent').innerHTML = 'going to create an error';
  }
}
