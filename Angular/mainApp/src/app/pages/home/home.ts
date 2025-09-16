import { Component } from '@angular/core';
import {  } from '@fortawesome/angular-fontawesome'
import { Api } from '../../services/api/api';
import {FormsModule} from '@angular/forms'
import { ChatTextPipe } from '../../pipes/chat-text-pipe';
@Component({
  selector: 'app-home',
  imports: [FormsModule,ChatTextPipe],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  userInput: string = '';
  loading: boolean = false;
  conversation:any = [];
  constructor(public api: Api) {
    
  }
  send() {
    this.loading = true;
    this.api.getData(this.userInput).subscribe(
      (res: any) => {
        console.log(res.choices[ 0 ].message.content);
        this.loading = false;
        let newObj = {
          user: this.userInput,
          ai: res.choices[0].message.content,
        }; 
        this.conversation.push(newObj)
       },
    (err)=>console.log(err))
  }
}
