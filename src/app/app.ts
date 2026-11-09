import { ProfileCard } from './profile-card/profile-card';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet, ProfileCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  fullName = 'Earl Jaissen M. Dizon';
  location = 'Bacolor, Pampanga';
  email = 'earljaissendizon@gmail.com';
  phone = '0916 321 7160';

  profile = 'I am a 3rd year student currently enrolled in Holy Angel Universitys School of Computing course. I am interested in web development and game design. I enjoy learning new technologies and building useful applications. ';

  skills = [
    'HTML and CSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'Node',
    'Linux Systems'
  ];

  message = 'Welcome to my profile!';
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    this.message = `You clicked the button ${this.clickCount} time(s).`;
  }
}
