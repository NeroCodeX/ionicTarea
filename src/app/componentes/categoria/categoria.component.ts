import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/modelos/category';
@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
})
export class CategoriaComponent implements OnInit {
  @Input() noticias :  Article[]=[];
  constructor() { }

  ngOnInit() {}

}
