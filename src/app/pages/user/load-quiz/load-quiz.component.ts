import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {

  id:any
  quizzes:any = []
  constructor(private _rout:ActivatedRoute, private _quiz:QuizService) { }

  ngOnInit(): void {
    this.id = this._rout.snapshot.params['id']
    this._rout.params.subscribe(
      (params) => {
        this.id = params['id']
        if(this.id == 0){
      this._quiz.getActiveQuizzes().subscribe(
        (data) => {
          this.quizzes = data
        },
        (error) => {
          console.log(error)
        }
      )
    }else{
      console.log('Load specific quiz')

      this._quiz.getActiveQuizzesByCategory(this.id).subscribe(
        (data) => {
          this.quizzes = data
        },
        (error) => {
          console.log(error)
        }
      )
    }
      }
    )
  }
  }
