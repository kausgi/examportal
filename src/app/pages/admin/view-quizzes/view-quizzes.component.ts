import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {

  quizzes= [
    {
      id:'',
    code:'',
    title:'',
   description:' ',
    maxMarks:'',
    numberOfQuestions:'',
   active: '',
   category:{
     title:''
   }
    }

  ]

  constructor(private _quiz:QuizService) { }

  ngOnInit(): void {
    this._quiz.getQuizzes().subscribe(
      (data:any) => {
        this.quizzes = data;
      },
      (error) => {
        Swal.fire('Error', 'Loading Error', 'error')
      }
    );
  }

  public deleteQuiz(id:any){
    this._quiz.deleteQuiz(id).subscribe(
      (data) => {
        Swal.fire('Success', 'Quiz deleted', 'success')
      }
      
      ,
      (error) => {
        Swal.fire('Error', 'Something went wrong', 'error')
      }
    )
  }


}
