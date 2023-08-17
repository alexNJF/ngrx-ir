import { AfterViewInit, Component, Inject } from '@angular/core';
@Component({
  selector: 'app-touterial',
  templateUrl: './touterial.component.html',
  styleUrls: ['./touterial.component.scss']
})
export class TouterialComponent  {
  ali = false;
  constructor() { }


  aliClick(){
    this.ali=true
  }

}
