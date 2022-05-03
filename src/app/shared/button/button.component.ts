import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input('name') name:string = '';
  @Output('change') change = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  onAddToCart(){
    this.change.emit()
  }
}
