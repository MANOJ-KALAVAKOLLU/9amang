import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chatText'
})
export class ChatTextPipe implements PipeTransform {

  transform(value: string): unknown {
    const str = value.replaceAll('**', '').replaceAll('\n','<br />')
    
    return str;
  }

}
