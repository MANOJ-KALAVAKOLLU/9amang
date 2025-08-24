import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { RouterLink } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { createUserWithEmailAndPassword} from '@angular/fire/auth'

@Component({
  selector: 'app-signup',
  imports: [FormsModule,RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {
  constructor(public auth:Auth){}
  em: string = ''
  pwd:string=''
  signup() {
    createUserWithEmailAndPassword(this.auth, this.em, this.pwd)
      .then((res: any) => console.log(res))
      .catch((err) => console.log(err));
  }
}
