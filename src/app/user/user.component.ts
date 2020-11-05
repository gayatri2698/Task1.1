import { Component, OnInit,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Output() parentComponent:EventEmitter<any>= new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    
  }
  SendData()
  {
    let item={name:' Name : Gayatri Suslade',age:'Age : 22'}
    this.parentComponent.emit(item)
  }

}
