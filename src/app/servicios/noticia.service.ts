import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Respuesta } from '../modelos/noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
  urlBase ='http://newsapi.org/v2/';
  apiKey = '&apiKey=e026439bdc914f3fb465a5b4d2e1626a';

  constructor(private http: HttpClient) { }
  getNoticias(){
   return this.http.get<Respuesta>(`${this.urlBase}everything?q=apple&from=2020-12-02&to=2020-12-02&sortBy=popularity${this.apiKey}`);
  }

  getCategory(country:string,category:string){
    return this.http.get<Respuesta>(`${this.urlBase}top-headlines?country=${country}&category=${category}{this.apiKey}`);
  }

}
