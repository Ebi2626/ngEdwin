import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RequestService } from 'src/app/services/request.service';
import { Message } from 'src/app/shared/interfaces';
import { Validation } from './vaildation';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [Validation]
})
export class ContactComponent implements OnInit {

  constructor(private requestService: RequestService, private validation: Validation) { }

  ngOnInit(): void {
  }

  initialMessageValue: Message = {
    yourEmail: '',
    yourName: '',
    yourSubject: '',
    yourMessage: '',
  }

  verifyMessage(message: Message) { // TODO: prawdziwa walidacja i zgłaszanie błędów pod polami
    if (
      this.validation.verifyEmail(message.yourEmail) &&
      this.validation.verifyMessage(message.yourMessage) &&
      this.validation.verifyName(message.yourName) &&
      this.validation.verifySubject(message.yourSubject)
    ) {
      this.sendMessage(message)
    } else {
      console.log("Niepoprawnie uzupełniłeś formularz"); // TODO: Ogólna obsługa błędów - forma alertu albo modala
    }
  }

  sendMessage(message: Message) {
    this.requestService.sendMessage(message).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }

}
