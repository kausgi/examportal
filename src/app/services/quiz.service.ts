import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import base_url from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }

  public getQuizzes(){
    return this.http.get(`${base_url}/quiz/`)
  }

  public addQuiz(quiz:any){
    return this.http.post(`${base_url}/quiz/`,quiz)
  }

  public deleteQuiz(id:any){
    return this.http.delete(`${base_url}/quiz/${id}`)
  }

  public getQuiz(id:any){
    return this.http.get(`${base_url}/quiz/${id}`)
  }

  public updateQuiz(quiz:any){
    return this.http.put(`${base_url}/quiz/${quiz.id}`, quiz)
  }

  public getQuizzesOfCategory(id:any){
    return this.http.get(`${base_url}/quiz/category/${id}`)
  }

  public getActiveQuizzes(){
    return this.http.get(`${base_url}/quiz/active`)
  }

  public getActiveQuizzesByCategory(id:any){
    return this.http.get(`${base_url}/quiz/category/active/${id}`)
  }
}


