import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  facebook : string = '../../../assets/img/facebook.png';
  twitter  : string = '../../../assets/img/twitter.png';
  whatsapp : string = '../../../assets/img/whatsapp.png';
  youtube  : string = '../../../assets/img/youtube.png';

  constructor() { }

  ngOnInit(): void {
  }

}
