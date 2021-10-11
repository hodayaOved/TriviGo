import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Quiz } from 'src/model/Quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }
  GetQuizById(id:number):Observable<Quiz>{
    return this.http.get<Quiz>(environment.http+"Quiz/GetQuizById/"+id)
  }
}
