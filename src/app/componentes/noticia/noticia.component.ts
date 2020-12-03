import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {
  @Input() name :  string;
  @Input() title :  string;
  @Input() number :  string;
  
  constructor() { }

  ngOnInit() {}

}
