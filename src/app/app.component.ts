import { Component } from '@angular/core';
import { AppbarComponent } from './appbar/appbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'oncologia';
}
