import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import base_url from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

  public getQuestionsOfQuiz(id:any){
    return this.http.get(`${base_url}/question/quiz/all/${id}`)
  }

  public addQuestion(question:any){
    return this.http.post(`${base_url}/question/`,question)
  }

  public deleteQuestion(id:any){
    return this.http.delete(`${base_url}/question/${id}`)
  }

  public updateQuestion(question:any){
    return this.http.put(`${base_url}/question/${question.id}`, question)
  }

  public getQuestion(id:any){
    return this.http.get(`${base_url}/question/${id}`)
  }
}
