import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/modelos/noticia';
// import { Respuesta } from 'src/app/modelos/noticia';
import { NoticiaService } from 'src/app/servicios/noticia.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  noticias : Article[] = [];

  constructor(private noticiasServicios: NoticiaService) {}
  ngOnInit(){
    this.noticiasServicios.getNoticias()
    .subscribe((resultado)=>{
      this.noticias.push(...resultado.articles)
       console.log(resultado); 
    });
  }

}
