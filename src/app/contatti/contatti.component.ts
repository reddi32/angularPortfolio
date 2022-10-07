import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent implements OnInit {
  contactform!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.contactform = new FormGroup({
      name: new FormControl(Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      text: new FormControl()
    })
  }

  onInvia(mioform: NgForm) {
    console.log(mioform)
  }

  onInvia2() {
    console.log(this.contactform)
  }
}
