import { Component } from '@angular/core';
import { Article } from 'src/app/modelos/noticia';
import { NoticiaService } from 'src/app/servicios/noticia.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
category : Article[] = [];
categorias =['business' ,'entertainment' ,'general', 'health' ,'science' ,'sports' ,'technology'
]
  constructor(private noticiasServicios: NoticiaService) {}
  ngOnInit(){
    this.noticiasServicios.getCategory('us','business')
    .subscribe((resultado)=>{
      this.category.push(...resultado.articles)
       console.log(resultado); 
    });
  }

}
