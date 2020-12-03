import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiaComponent } from './noticia/noticia.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { IonicModule } from '@ionic/angular';
import {CategoriaComponent} from './categoria/categoria.component';



@NgModule({
  declarations: [
    NoticiaComponent,
    NoticiasComponent,
    CategoriaComponent
    
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CommonModule,
    NoticiasComponent,
    CategoriaComponent
  ]
})
export class ComponentesModule { }
