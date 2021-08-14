import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from 'src/app/shared/interfaces';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  @ViewChild(NgForm)
  form: NgForm;
  
  @Input()
  initialFormValue: Message;

  @Output()
  passMessage = new EventEmitter();

  sendMessage(): void {
    this.passMessage.emit(this.form.value);
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.form.setValue(this.initialFormValue);
    }, 0);
  }

}
