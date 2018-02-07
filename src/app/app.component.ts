import { Component } from '@angular/core';
// import appComponent if dependcy injecting into main file

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello world';
}
