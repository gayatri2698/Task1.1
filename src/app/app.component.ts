import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project2';
  name="";
  age="";
  parentComponent(data)
  {
    console.log(data)
    this.name=data.name
    this.age=data.age

  }
}
