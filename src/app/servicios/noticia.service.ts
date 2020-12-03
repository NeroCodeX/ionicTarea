import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Respuesta } from '../modelos/noticia';
import { environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) { }
  getNoticias(){
   return this.http.get<Respuesta>(`${environment.urlBase}everything?q=apple&from=2020-12-02&to=2020-12-02&sortBy=popularity&apiKey=${environment.apiKey}`);
  }

  getCategory(category:string){
    return this.http.get<Respuesta>(`${environment.urlBase}top-headlines?country=us&category=${category}&apiKey=${environment.apiKey}`);
  }

}
